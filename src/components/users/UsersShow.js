import React from 'react';
import Axios from 'axios';


class UsersShow extends React.Component {

  state = {
    user: {}
  }


  componentWillMount() {
    console.log('user show', this.props.match.params.id);
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="wrapper">
        <div>User Show</div>
        <img src={this.state.user.picture}/>
        <h1>{this.state.user.firstName}</h1>
        <p>{this.state.user.email}</p>
      </div>
    );
  }

}

export default UsersShow;
