import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './auth-actions';

const initialState = {
  name: null,
  email: null,
};

const user = createReducer(initialState, {
  [actions.signupUserSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
    [actions.signupUserSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
    [actions.signupUserError]: (_, { payload }) => payload,
});


export default combineReducers({
  user,
  token,
  error,
});