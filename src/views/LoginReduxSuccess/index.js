import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../Login/styles';

const LoginReduxSuccess = props => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs' className={classes.paper}>
      <Typography component='p' variant='h5'>
        Почта: {props.email}
      </Typography>
      <Typography component='p' variant='h5'>
        Пароль: {props.password}
      </Typography>
    </Container>
  );
};

LoginReduxSuccess.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginReduxSuccess;
