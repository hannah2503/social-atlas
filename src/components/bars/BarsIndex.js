import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SearchBar from '../utilities/SearchBar';

class BarsIndex extends React.Component {

  state = {
    bars: [],
    sortBy: 'name',
    sortDirection: 'desc',
    query: ''
  };

  componentWillMount(){
    Axios
      .get('api/bars')
      .then(res => this.setState({ bars: res.data }))
      .catch(err => console.log(err));
  }

  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({sortBy, sortDirection});
  }

  handleSearch = (e) => {
    this.setState({query: e.target.value});
  }



  render(){

    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');

    const orderedBars = _.orderBy(this.state.bars, [sortBy], [sortDirection]);
    const bars = _.filter(orderedBars, (bar) => {
      return regex.test(bar.name) || regex.test(bar.address);
    });
    return(
      <div>
        <Link to='/bars/new'><button>add a place</button></Link>
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
                <p>{bar.address}</p>
                <p className="categories">
                  <span className="category">{bar.category[0]}</span>
                  <span className="category">{bar.category[1]}</span>
                  <span className="category">{bar.category[2]}</span>
                  <span className="category">{bar.category[3]}</span>
                  <span className="category">{bar.category[4]}</span>
                </p>
              </div>
            </div>
          );
        })}

      </div>

    );
  }

}


export default BarsIndex;
