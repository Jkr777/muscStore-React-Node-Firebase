import { GOOGLE_SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, EMAIL_SIGN_IN_START, CHECK_USER_SESSION, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './action-types';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = data => ({
  type: EMAIL_SIGN_IN_START,
  data
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  user
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  error
});

export const signUpStart = data => ({
  type: SIGN_UP_START,
  data
});

export const signUpSuccess = ({ user, aditionalData }) => ({
  type: SIGN_UP_SUCCESS,
  data: { user, aditionalData }
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  error
});