import AuthService from '../../service/AuthService';
import actions from './auth-actions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const signUpUser = (credentionals) => async dispatch => {
  dispatch(actions.signupUserRequest());
  try {
    const response = await AuthService.signup(credentionals);
    actions.signupUserSuccess(response.data);
    token.set(response.data.token);
  } catch (error) {
    actions.signupUserError(error.message);
  }
}

const loginUser = (email, password) => async (dispatch) => {
  dispatch(actions.loginUserRequest());

  try {
    const response = await AuthService.login(email, password);
    dispatch(actions.loginUserSuccess(response.data));
    token.set(response.data.token)

  } catch (error) {
    dispatch(actions.loginUserError(error.message))
  }
}

const logoutUser = () => async dispatch => {
  dispatch(actions.logoutUserRequest());

  try {
    await AuthService.logout();
    dispatch(actions.logoutUserSuccess());
      token.unset();
  } catch (error) {
      dispatch(actions.logoutUserError(error.message));
  }
}

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth: { token: persistedToken } } = getState();
  if (!persistedToken) {
    return;
  }
  
  token.set(persistedToken)
}

// eslint-disable-next-line import/no-anonymous-default-export

const authOperations = {
  signUpUser,
  loginUser,
  logoutUser,
  getCurrentUser
}

export default authOperations;