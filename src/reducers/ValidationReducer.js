import { validationActionTypes } from '../actions/actionTypes';

const getInitialState = () => ({
  emailValid: true,
  passwordValid: true,
});

export const ValidationReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case validationActionTypes.SET_EMAIL_VALIDATION: {
      return {
        ...state,
        emailValid: action.payload,
      };
    }
    case validationActionTypes.SET_PASSWORD_VALIDATION: {
      return {
        ...state,
        passwordValid: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
