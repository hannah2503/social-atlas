import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
    history.push('/login');
  };




  return(
    <div>
      <div className="logo">
        <Link to="/"><h1>the social atlas</h1></Link>
      </div>
      <nav>
        {Auth.isAuthenticated() &&<Link to="/bars">Index</Link>}
        {' '}
        {/* {Auth.isAuthenticated() &&<Link to={`/users/${Auth.user.id}`}>My Profile</Link>} */}
        {' '}
        {! Auth.isAuthenticated() && <Link to="/login">Login</Link>}
        {' '}
        {! Auth.isAuthenticated() && <Link to="/register">Register</Link>}
        {' '}
        {Auth.isAuthenticated() && <a href="#" onClick={logout}>Logout</a>}
      </nav>
      <hr/>
    </div>
  );
};


export default withRouter(Navbar);
