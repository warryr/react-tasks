import { createStore, combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { InputReducer } from './InputReducer';
import { ValidationReducer } from './ValidationReducer';

const rootReducer = combineReducers({
  currentInput: InputReducer,
  validation: ValidationReducer,
  loggedInData: LoginReducer,
});

const store = createStore(rootReducer);

export default store;
