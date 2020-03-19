import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../Form-input';
import FormButton from '../Form-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/action-generator';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const { email, password } = userData;

  const handleSubmit = async e => {
    e.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = e => setUserData({...userData, [e.target.name]: e.target.value});

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input 
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <Input 
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required
        />
        <div className="btns">
          <FormButton type="submit">
            Sign In
          </FormButton>
          <FormButton 
            type="button" 
            onClick={googleSignInStart} 
            googleActive>
              Sign In with Google
          </FormButton>
        </div>
      </form>
    </div>
  )
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);