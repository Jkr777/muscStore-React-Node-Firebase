import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/action-generator';
import Input from '../Form-input';
import FormButton from '../Form-button';

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  return (
    <div className="sign-up">
      <h2 className="sign-up__title">Create a new account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input 
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          label="display name"
          required
        />
        <Input 
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <Input 
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <Input 
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="confirm password"
          required
        />
        <FormButton type="submit"> Register </FormButton>
      </form>
    </div>
  );
}

export default connect(null, { signUpStart })(SignUp);