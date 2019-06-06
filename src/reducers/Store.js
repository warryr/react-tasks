import { createStore, combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { InputReducer } from './InputReducer';
import { ValidationReducer } from './ValidationReducer';

const rootReducer = combineReducers({
  input: InputReducer,
  validation: ValidationReducer,
  login: LoginReducer
});

const store = createStore(rootReducer);

export default store;