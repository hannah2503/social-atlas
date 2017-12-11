import React from 'react';
import Axios from 'axios';

class UsersIndex extends React.Component {

  state = {
    users: []
  }


  componentWillMount() {

    Axios
      .get('api/users')
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="wrapper">
        <div>User Index</div>
        {this.state.users.map(user => {
          <div key={user.id}>
            <img src={user.picture}/>
            <h1>{user.firstName}</h1>
            <p>{user.email}</p>
            <img src={user.picture}/>
          </div>;
        })}
      </div>
    );
  }

}

export default UsersIndex;
