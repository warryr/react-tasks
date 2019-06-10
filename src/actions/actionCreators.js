import {
  inputActionTypes,
  loginActionTypes,
  validationActionTypes,
} from './actionTypes';

export const setCurrentEmail = email => {
  return {
    type: inputActionTypes.SET_CURRENT_EMAIL,
    payload: email,
  };
};

export const setCurrentPassword = password => {
  return {
    type: inputActionTypes.SET_CURRENT_PASSWORD,
    payload: password,
  };
};

export const setEmailValidation = bool => {
  return {
    type: validationActionTypes.SET_EMAIL_VALIDATION,
    payload: bool,
  };
};

export const setPasswordValidation = bool => {
  return {
    type: validationActionTypes.SET_PASSWORD_VALIDATION,
    payload: bool,
  };
};

export const setLoginEmail = email => {
  return {
    type: loginActionTypes.SET_LOGIN_EMAIL,
    payload: email,
  };
};

export const setLoginPassword = password => {
  return {
    type: loginActionTypes.SET_LOGIN_PASSWORD,
    payload: password,
  };
};

export const cleanCurrentState = () => {
  return {
    type: inputActionTypes.CLEAN_CURRENT_STATE,
  };
};

export const cleanValidationState = () => {
  return {
    type: validationActionTypes.CLEAN_VALIDATION_STATE,
  };
};
