import { inputActionTypes } from '../actions/actionTypes';

export const InputReducer = (state = {}, action) => {
  switch (action.type) {
    case inputActionTypes.SET_CURRENT_EMAIL: {
      return {
        ...state,
        currentEmail: action.payload,
      };
    }
    case inputActionTypes.SET_CURRENT_PASSWORD: {
      return {
        ...state,
        currentPassword: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
