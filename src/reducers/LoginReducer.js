import { loginActionTypes } from '../actions/actionTypes';

const getInitialState = () => ({
  emailError: false,
  passwordError: false,
});

export const LoginReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case loginActionTypes.SET_LOGIN_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case loginActionTypes.SET_LOGIN_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
