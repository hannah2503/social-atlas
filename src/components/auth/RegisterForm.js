import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors}) => {

  return(
    <div className="wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input type="text" onChange={handleChange} value={user.firstName} name="firstName" placeholder="First Name"/>
          {errors.firstName && <small>{errors.firstName}</small>}
        </div>
        <div>
          <label>Last Name</label>
          <input  type="text" onChange={handleChange} value={user.lastName} name="lastName" placeholder="Last Name"/>
          {errors.lastName && <small>{errors.lastName}</small>}
        </div>
        <div>
          <label>Email</label>
          <input  type="text" onChange={handleChange} value={user.email} name="email" placeholder="Email"/>
          {errors.email && <small>{errors.email}</small>}
        </div>
        <div>
          <label>Picture</label>
          <input  type="text" onChange={handleChange} value={user.picture} name="picture" placeholder="add an image url here"/>
        </div>
        <div>
          <label>Password</label>
          <input  type="text" onChange={handleChange} value={user.password} name="password" placeholder="password"/>
          {errors.password && <small>{errors.password}</small>}
        </div>
        <div>
          <label>Password Confirmation</label>
          <input  type="text" onChange={handleChange} value={user.passwordConfirmation} name="passwordConfirmation" placeholder="confirm your password"/>
        </div>
        <button className="grey-button" type="submit">register</button>
      </form>
    </div>
  );
};



export default RegisterForm;
