import AuthService from '../../service/AuthService';
import actions from './auth-actions';

const signUpUser = (credentionals) => dispatch => {
  dispatch(actions.signupUserRequest());

  AuthService.signup(credentionals)
    .then(res => dispatch(actions.signupUserSuccess(res.data)))
    .catch(error => actions.signupUserError(error.message))

}

const loginUser = (email, password) => (dispatch) => {
  dispatch(actions.loginUserRequest())
  
  AuthService.login(email, password)
    .then((res) => {
      console.log(res.data);
      dispatch(actions.loginUserSuccess(res.data))
    })
    .catch((error) => dispatch(actions.loginUserError(error.message)))
}

// eslint-disable-next-line import/no-anonymous-default-export

const authOperations = {
  signUpUser,
  loginUser
}

export default authOperations;