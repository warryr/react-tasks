import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const Login = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form id='form' className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" fullWidth autoFocus label="Почта"
                     id="email" name="email" required onChange={props.display}/>
          <TextField type="password" variant="outlined" margin="normal" fullWidth label="Пароль"
                     id="password" name="password" required onChange={props.display}/>
          <Button type="button" variant="contained" color="primary" fullWidth
                  className={classes.submit} onClick={props.login}>
            Войти
          </Button>
        </form>
        <Box className={classes.logBox}>
          <Typography>
            Введенная почта: {props.emailValue}
          </Typography>
          <Typography>
            Введенный пароль: {props.passwordValue}
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

Login.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  display: PropTypes.func.isRequired,
};

export default Login;