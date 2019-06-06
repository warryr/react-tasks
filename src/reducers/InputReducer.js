import { inputActionTypes } from '../actions/actionTypes';

export const InputReducer = (state={currentInput: {}}, action) => {
  switch (action) {
    case inputActionTypes.SET_CURRENT_EMAIL: {
      return {
        ...state,
        currentInput: {
          ...state.currentInput,
          currentEmail: action.payload
        }
      };
    }
    case inputActionTypes.SET_CURRENT_PASSWORD: {
      return {
        ...state,
        currentInput: {
          ...state.currentInput,
          currentPassword: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};
