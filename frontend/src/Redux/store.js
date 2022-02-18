import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
const initialState = {
  userLogin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);
