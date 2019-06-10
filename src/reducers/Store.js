import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LoginReducer } from './LoginReducer';
import { InputReducer } from './InputReducer';
import { ValidationReducer } from './ValidationReducer';

const rootReducer = combineReducers({
  currentInput: InputReducer,
  validation: ValidationReducer,
  loggedInData: LoginReducer,
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
