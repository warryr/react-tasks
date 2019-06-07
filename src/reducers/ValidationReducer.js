import { validationActionTypes } from '../actions/actionTypes';

export const ValidationReducer = (state = {}, action) => {
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
