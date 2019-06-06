import { validationActionTypes } from '../actions/actionTypes';

export const ValidationReducer = (state={validation: {}}, action) => {
  switch (action.type) {
    case validationActionTypes.SET_EMAIL_VALIDATION: {
      return {
        validation: {
          ...state.validation,
          emailValid: action.payload
        }
      };
    }
    case validationActionTypes.SET_PASSWORD_VALIDATION: {
      return {
        validation: {
          ...state.validation,
          passwordValid: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};
