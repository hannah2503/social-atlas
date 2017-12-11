import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class UsersShow extends React.Component {

  state = {
    user: {}
  }


  componentWillMount() {
    console.log('user show', this.props.match.params.id);
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="wrapper">
        <div>User Show</div>
        <img className="userPicture" src={this.state.user.picture}/>
        <h1>{this.state.user.firstName}{' '}{this.state.user.lastName}</h1>
      </div>
    );
  }

}

export default UsersShow;
