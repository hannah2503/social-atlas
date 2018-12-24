import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import LoginForm from './LoginForm';

class Login extends React.Component {
 
   state = {
    credentials: {
      email: '',
      password: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const credentials = Object.assign({}, this.state.credentials, { [name]: value });
    this.setState({ credentials });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/login', this.state.credentials)
      .then((res) => {
        Auth.setToken(res.data.token);
        console.log('logged in!');
        this.props.history.push('/bars');
      })
      .catch((err) => {
        this.setState({ errors: err.response.data.errors });
        console.log(this.state.errors, err.response.data.errors);
        Auth.logout();
        this.props.history.push('/login');
      });
  }



  render() {
    return(
      <div>
        <LoginForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={this.state.credentials.email}
          password={this.state.credentials.password}
          errors={this.state.errors}
        />
      </div>
    );
  }

}

export default Login;
