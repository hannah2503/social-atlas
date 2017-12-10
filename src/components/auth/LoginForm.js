import React from 'react';

const LoginForm = ({handleChange, handleSubmit, credentials, errors}) => {
  return(
    <div className="wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <br/>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={credentials.email}
          />
          {errors.email && <small>{errors.email}</small>}
          {/* cannot do error messages - need to ammend secure route error handling */}
        </div>
        <div>
          <label>Password</label>
          <br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
          {errors.password && <small>{errors.password}</small>}
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
