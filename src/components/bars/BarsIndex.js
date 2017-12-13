import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SearchBar from '../utilities/SearchBar';
import Auth from '../../lib/Auth';

class BarsIndex extends React.Component {

  state = {
    bars: [],
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    user: {},
    colour: false
  };

  componentWillMount(){
    const { userId } = Auth.getPayload();
    Axios
      .all([
        Axios.get('api/bars'),
        Axios.get(`api/users/${userId}`, {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      ])
      .then(Axios.spread((bars, user) => {
        console.log('bars', bars, 'user',user);
        const newBars = bars.data.map(bar => {
          return Object.assign({}, bar, {isClicked: user.data.favorites.includes(bar.id)});
        });

        this.setState({user: user.data, bars: newBars});
      }))
      .catch(err => console.log(err));
  }

  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({sortBy, sortDirection});
  }

  handleSearch = (e) => {
    this.setState({query: e.target.value});
  }

  saveBar = (e) => {
    const barId = e.target.value;
    // const favorites = this.state.user.favorites.concat(barId);
    // const user = Object.assign({}, this.state.user, { favorites });

    const bars = this.state.bars.map(bar => {
      if (`${bar.id}` === `${barId}`) {
        return Object.assign({}, bar, {isClicked: !bar.isClicked});
      } else {
        return bar;
      }
    });

    Axios
      .put(`api/users/${this.state.user.id}/favorite`, { user: this.state.user, favBar: barId }, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        this.setState({ user: res.data, bars });

      })
      .catch(err => console.log(err));
  }



  render(){
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');
    const orderedBars = _.orderBy(this.state.bars, [sortBy], [sortDirection]);
    const bars = _.filter(orderedBars, (bar) => {
      return regex.test(bar.name) || regex.test(bar.address) || regex.test(bar.createdBy.firstName);
    });

    return(
      <div>
        <SearchBar handleSort={this.handleSort} handleSearch={this.handleSearch}/>
        {bars.map((bar, i) => {
          return(
            <div key={i}>
              <div className="box">

                <div className="imgContainer">
                  <img src={bar.image}/>
                </div>

                <p className="type">{bar.type}</p>

                <Link to={`/bars/${bar.id}`}>{bar.name}</Link>

                <span className="stars">{bar.rating}</span>

                <p className="categories">
                  <span className="category">{bar.category[0]}</span>
                  <span className="category">{bar.category[1]}</span>
                  <span className="category">{bar.category[2]}</span>
                  <span className="category">{bar.category[3]}</span>
                  <span className="category">{bar.category[4]}</span>
                </p>

                <button value={bar.id} onClick={this.saveBar} className={!bar.isClicked ?  'grey-button-button' : 'green' }>save</button>


                <p>Author: <Link to={`/users/${bar.createdBy.id}`}>{bar.createdBy.firstName}</Link></p>
              </div>
            </div>
          );
        })}

      </div>
    );
  }

}
export default BarsIndex;
