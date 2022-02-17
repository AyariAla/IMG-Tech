import { combineReducers } from 'redux';
import { userSigninReducer, userRegisterReducer } from './user/userReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  userSignIn: userSigninReducer,
  userRegister: userRegisterReducer,
});

export default persistReducer(persistConfig, rootReducer);
