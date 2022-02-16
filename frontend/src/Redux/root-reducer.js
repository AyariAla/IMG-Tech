import { combineReducers } from 'redux';
import { userSigninReducer, userRegisterReducer } from './user/user.reducers';

const rootReducer = combineReducers({
  userSignIn: userSigninReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
