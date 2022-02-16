import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from './user.types';

//  >  <

const INITIAL_STATE = {
  currentUser: null,
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state };
    case USER_REGISTER_SUCCESS:
      return { ...state, userInfo: action.payload };
    case USER_REGISTER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
