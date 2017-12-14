import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import {Link} from 'react-router-dom';

import BackButton from '../utilities/BackButton';

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

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="show">
            <img className="userPicture" src={this.state.user.picture}/>
            <div className="userInfo">
              <h2>{this.state.user.firstName}{' '}{this.state.user.lastName}</h2>
              <h2>{this.state.user.email}</h2>
            </div>
            <h3>my favorites:</h3>
            <div className="favorites-img-wrapper">
              {this.state.user.favorites && this.state.user.favorites.map((fave, i) =>
                <div key={i} >
                  <Link to={`/bars/${fave.id}`}>
                    <div>
                      <img className="favorites-img" src={fave.image} alt={fave.name}/>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="userBack"><BackButton/></div>
          </div>
        </div>
      </div>
    );
  }

}

export default UsersShow;
