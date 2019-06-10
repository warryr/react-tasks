import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        />
        <Typography hidden={!props.emailError}>Минимум 6 символов</Typography>
      </div>

      <div>
        <label htmlFor='reduxFormPassword'>Пароль</label>
        <Field
          name='password'
          id='reduxFormPassword'
          component='input'
          type='password'
        />
        <Typography hidden={!props.passwordError}>
          Минимум 6 символов
        </Typography>
      </div>

      <button type='submit'>Войти</button>

      <Box>
        <Typography>Введенная почта: {props.emailValue}</Typography>
        <Typography>Введенный пароль: {props.passwordValue}</Typography>
      </Box>
    </form>
  );
};

LoginReduxForm = reduxForm({
  form: 'loginForm',
})(LoginReduxForm);

LoginReduxForm.propTypes = {
  handleSubmit: PropTypes.func,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
};

export default LoginReduxForm;
