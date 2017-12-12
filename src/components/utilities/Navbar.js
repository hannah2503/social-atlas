import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  };

  const user = Auth.getPayload();
  console.log(user, 'this is the user');

  return(
    <div>
      <div className="logo">
        <Link to="/"><h1>the social atlas</h1></Link>
      </div>
      <nav>
        {Auth.isAuthenticated() &&<Link to="/bars">the atlas</Link>}
        {' '}
        {Auth.isAuthenticated() &&<Link to={`/users/${user.userId}`}>my profile</Link>}
        {' '}
        {! Auth.isAuthenticated() && <Link to="/login">login</Link>}
        {' '}
        {! Auth.isAuthenticated() && <Link to="/register">register</Link>}
        {' '}
        {Auth.isAuthenticated() && <a href="#" onClick={logout}>logout</a>}
      </nav>
      <hr/>
    </div>
  );
};


export default withRouter(Navbar);
