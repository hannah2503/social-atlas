import React from 'react';

const LoginForm = ({handleChange, handleSubmit, credentials, errors}) => {
  console.log(credentials)
  return(
    <div className="wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label for="email">Email</label>
          {errors}
          <br/>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={credentials.email}
            autocomplete="current-username"
          />
          <small>{errors.email}</small>
        </div>
        <div>
          <label for="password">Password</label>
          <br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
            autocomplete="current-password"
          />
          <small>{errors.password}</small>
        </div>
        <button className="grey-button" type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
