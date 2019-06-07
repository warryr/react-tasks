import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Counter = props => {
  const classes = useStyles();
  return (
    <Container fixed>
      <Typography component='h1' variant='h3' className={classes.h3}>
        {props.value}
      </Typography>
      <Button
        variant='contained'
        className={classes.defaultButton}
        onClick={props.increment}>
        Increment
      </Button>
      {props.ableToDec ? (
        <Button
          variant='contained'
          className={classes.defaultButton}
          onClick={props.decrement}>
          Decrement
        </Button>
      ) : (
        <Button variant='contained' className={classes.defaultButton} disabled>
          Decrement
        </Button>
      )}
      <Button
        variant='contained'
        className={classes.defaultButton}
        onClick={props.reset}>
        Reset
      </Button>
    </Container>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  ableToDec: PropTypes.bool.isRequired,
};

export default Counter;
