import { inputActionTypes } from '../actions/actionTypes';

const getInitialState = () => ({
  currentEmail: '',
  currentPassword: '',
});

export const InputReducer = (state = getInitialState(), action) => {
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
    case inputActionTypes.CLEAN_CURRENT_STATE: {
      return getInitialState();
    }
    default: {
      return state;
    }
  }
};
