import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const LoginRedux = props => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form id='reduxForm' className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            id='reduxEmail'
            name='email'
            label='Почта'
            fullWidth
            autoFocus
            required
            error={props.emailError}
            onChange={props.displayInput}
          />
          <Typography className={classes.hint} hidden={!props.emailError}>
            Минимум 6 символов
          </Typography>

          <TextField
            type='password'
            variant='outlined'
            margin='normal'
            id='reduxPassword'
            name='password'
            label='Пароль'
            fullWidth
            required
            error={props.passwordError}
            onChange={props.displayInput}
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

LoginRedux.propTypes = {
  login: PropTypes.func.isRequired,
  displayInput: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
};

export default LoginRedux;
