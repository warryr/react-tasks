import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const renderTextField = ({input, ...custom}) => {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      {...input}
      {...custom}
      fullWidth
    />
  );
};

let LoginReduxForm = props => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form onSubmit={props.handleSubmit} className={classes.form}>
          <Field
            name='email'
            component={renderTextField}
            label='Почта'
            error={props.emailError}
          />
          <Typography className={classes.hint} hidden={!props.emailError}>
            Минимум 6 символов
          </Typography>

          <Field
            type='password'
            name='password'
            component={renderTextField}
            label='Пароль'
            error={props.passwordError}
          />
          <Typography className={classes.hint} hidden={!props.passwordError}>
            Минимум 6 символов
          </Typography>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            className={classes.submit}
            onClick={props.login}>
            Войти
          </Button>
        </form>

        <Box className={classes.logBox}>
          <Typography>Введенная почта: {props.emailValue}</Typography>
          <Typography>Введенный пароль: {props.passwordValue}</Typography>
        </Box>
      </div>
    </Container>
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
