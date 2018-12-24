import React from 'react';

const LoginForm = ({handleChange, handleSubmit, credentials, errors}) => {
  return(
    <div className="wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label for="email">Email</label>
          <br/>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={credentials.email}
            autocomplete="current-username"
          />
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
        </div>
        <button className="grey-button" type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
