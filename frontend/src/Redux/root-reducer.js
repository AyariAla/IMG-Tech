import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './user/userReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default persistReducer(persistConfig, rootReducer);
