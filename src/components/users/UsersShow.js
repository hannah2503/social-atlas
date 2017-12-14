import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import {Link} from 'react-router-dom';

class UsersShow extends React.Component {

  state = {
    user: {},
    faves: []
  }


  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));

  }

  // getFavorites = () => {
  //   Axios
  //     .get(`/bars/${this.state.user.favorites}`, {
  //       headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //     })
  //     .then(res => this.setState({ faves: res.data.name }))
  //     .catch(err => console.log(err));
  // }

  render() {
    console.log(this.state.user.favorites);

    return(
      <div className="wrapper">
        <div className="show">
          <img className="userPicture" src={this.state.user.picture}/>
          <div className="userInfo">
            <h2>{this.state.user.firstName}{' '}{this.state.user.lastName}</h2>
            <h3>{this.state.user.email}</h3>
            <h3>favorites:</h3>
            {this.state.user.favorites && this.state.user.favorites.map((fave, i) =>
              <div key={i}>
                <Link to={`/bars/${fave}`}>
                  <div className="grey-button">favorite bar</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

}

export default UsersShow;
