import { loginActionTypes } from '../actions/actionTypes';

export const LoginReducer = (state = { loggedInData: {} }, action) => {
  switch (action.type) {
    case loginActionTypes.SET_LOGIN_EMAIL: {
      return {
        loggedInData: {
          ...state.loggedInData,
          email: action.payload,
        },
      };
    }
    case loginActionTypes.SET_LOGIN_PASSWORD: {
      return {
        loggedInData: {
          ...state.loggedInData,
          password: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
