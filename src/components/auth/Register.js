import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import RegisterForm from './RegisterForm';

class Register extends React.Component {

state = {
  user: {
    firstName: '',
    lastName: '',
    picture: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  },
  errors: {}
};

handleChange = ({ target: { name, value }}) => {
  const user = Object.assign({}, this.state.user, { [name]: value });
  this.setState({ user });
}

handleSubmit = (e) => {
  e.preventDefault();

  Axios
    .post('/api/register', this.state.user)
    // .then(() => {
    //   this.props.history.push('/bars');
    // })
    .then((res) => {
      Auth.setToken(res.data.token);
      console.log('registered!');
      this.props.history.push('/bars');
    })
    .catch(err => this.setState({ errors: err.response.data.errors }));
}

render() {
  return (
    <RegisterForm
      user={this.state.user}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}
    />
  );
}
}


export default Register;
