import { createAction } from '@reduxjs/toolkit';


const signupUserRequest = createAction('auth/signup_user_request');
const signupUserSuccess = createAction('auth/signup_user_success');
const signupUserError = createAction('auth/signup_user_error');

const loginUserRequest = createAction('auth/login_user_request');
const loginUserSuccess = createAction('auth/login_user_success');
const loginUserError = createAction('auth/login_user_error');

const actions = {
  signupUserRequest,
  signupUserSuccess,
  signupUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError
}

export default actions;