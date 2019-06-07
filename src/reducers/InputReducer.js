import { inputActionTypes } from '../actions/actionTypes';

export const InputReducer = (state = { currentInput: {} }, action) => {
  switch (action.type) {
    case inputActionTypes.SET_CURRENT_EMAIL: {
      return {
        currentInput: {
          ...state.currentInput,
          currentEmail: action.payload,
        },
      };
    }
    case inputActionTypes.SET_CURRENT_PASSWORD: {
      return {
        currentInput: {
          ...state.currentInput,
          currentPassword: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
