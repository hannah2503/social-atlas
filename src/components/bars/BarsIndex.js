import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ReactStars from 'react-stars';

import SearchBar from '../utilities/SearchBar';
import Auth from '../../lib/Auth';
import TagIcon from '../utilities/icons/TagIcon';

class BarsIndex extends React.Component {

  state = {
    bars: [],
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    user: {}
  };

  componentWillMount(){
    const { userId } = Auth.getPayload();
    Axios
      .all([
        Axios.get('api/bars'),
        Axios.get(`api/users/${userId}`, {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      ])
      .then(Axios.spread((bars, user) => {
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

  saveBar = (barId) => {
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
        this.setState({ user: res.data, bars }, () => console.log(this.state.bars));
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
      <div className="index-wrapper">
        <SearchBar handleSort={this.handleSort} handleSearch={this.handleSearch}/>

        {bars.map(bar => {
          return(
            <div key={bar.id}>
              <div className="box">

                <div className="imgContainer">
                  <Link to={`/bars/${bar.id}`}><img src={bar.image}/></Link>
                </div>

                <p className="type">{bar.type}</p>

                <Link to={`/bars/${bar.id}`}>{bar.name}</Link>

                <span className="stars">
                  <ReactStars
                    edit={false}
                    count={5}
                    value ={bar.rating}
                    size={24}
                    color2={'#ffd700'} />
                </span>

                <p>{bar.address}</p>

                <p className="categories">
                  { bar.category.map((category, i) => <span key={i} className="category">
                    <TagIcon className={category.split(' ')[0].toLowerCase()}/>{category}
                  </span>) }
                </p>

                <div className="fav-btn" onClick={() => this.saveBar(bar.id)}>
                  {!bar.isClicked ? <div className="favorited-bar"></div> : <div className="unfavorited-bar"></div>}
                </div>
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
