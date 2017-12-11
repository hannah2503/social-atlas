import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import BackButton from '../utilities/BackButton';
import GoogleMap from '../utilities/GoogleMap';

class BarsShow extends React.Component {
  state = {
    bar: {
      name: '',
      address: '',
      location: {
        lat: '',
        lng: ''
      },
      image: '',
      website: '',
      description: '',
      category: [],
      type: '',
      rating: ''
    },
    errors: {}
  };



  deleteBar = () => {
    Axios
      .delete(`/api/bars/${this.props.match.params.id}`, {
        headers: {'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/bars'))
      .catch(err => console.log(err));
  }


  componentWillMount(){
    Axios
      .get(`/api/bars/${this.props.match.params.id}`)
      .then(res => this.setState({ bar: res.data }))
      .catch(err => console.log(err));
  }


  render(){
    const stars = [];
    for (var i = 0; i < this.state.bar.rating; i++) stars.push(1);
    console.log(this.state.bar.location, 'location on render');
    return(
      <div className="wrapper">
        <div className="show">
          <img src={this.state.bar.image}/>
          <p className="type">{this.state.bar.type}</p>
          <a href={this.state.bar.website} target="_blank"><h1>{this.state.bar.name}</h1></a>

          <p className="stars">{ stars.map((star, i) => <span key={i}>&#11088;</span>)}</p>

          <p>{this.state.bar.address}</p>
          <p>{this.state.bar.description}</p>


          <div className="categories">
            <span className="category">{this.state.bar.category[0]}</span>
            <span className="category">{this.state.bar.category[1]}</span>
            <span className="category">{this.state.bar.category[2]}</span>
            <span className="category">{this.state.bar.category[3]}</span>
            <span className="category">{this.state.bar.category[4]}</span>
          </div>

          <div className="buttons">
            <Link to={`/bars/${this.state.bar.id}/edit`} className="grey-button">Edit</Link>
            <a onClick={this.deleteBar} className="grey-button">Delete</a>
          </div>

          {this.state.bar.location.lat && <GoogleMap center={this.state.bar.location} />}

          <hr/>
          <BackButton />
        </div>
      </div>

    );
  }
}
export default BarsShow;
