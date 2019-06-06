import { loginActionTypes } from '../actions/actionTypes';

export const LoginReducer = (state={loggedInData: {}}, action) => {
  switch (action) {
    case loginActionTypes.SET_LOGIN_EMAIL: {
      return {
        ...state,
        loggedInData: {
          ...state.loggedInData,
          email: action.payload
        }
      };
    }
    case loginActionTypes.SET_LOGIN_PASSWORD: {
      return {
        ...state,
        loggedInData: {
          ...state.loggedInData,
          password: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};
