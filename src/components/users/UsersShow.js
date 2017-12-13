import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class UsersShow extends React.Component {

  state = {
    user: {}
  }


  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));

  }

  render() {
    console.log(this.state.user.favorites);
    return(
      <div className="wrapper">
        <h1>Your Profile</h1>
        <img className="userPicture" src={this.state.user.picture}/>
        <h1>{this.state.user.firstName}{' '}{this.state.user.lastName}</h1>
        <h3>Favourites:</h3>

        { this.state.user.favorites && this.state.user.favorites.map( favorite => {
          <p key={favorite.id}>{favorite.id}</p>;
        })}

      </div>
    );
  }

}

export default UsersShow;
