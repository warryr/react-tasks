import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validateField from '../../util/validateField';

const validate = values => {
  const errors = { email: false, password: false };
  errors.email = !validateField(values.email);
  errors.password = !validateField(values.password);
  return errors;
};

let LoginReduxForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor='reduxFormEmail'>Почта</label>
        <Field
          name='email'
          id='reduxFormEmail'
          component='input'
          type='email'
          validate={[validate]}
        />
      </div>
      <div>
        <label htmlFor='reduxFormPassword'>Пароль</label>
        <Field
          name='password'
          id='reduxFormPassword'
          component='input'
          type='password'
          validate={[validate]}
        />
      </div>
      <button type='submit'>Войти</button>
    </form>
  );
};

LoginReduxForm = reduxForm({
  form: 'login',
})(LoginReduxForm);

export default LoginReduxForm;
