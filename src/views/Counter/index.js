import React from 'react';
import PropTypes from 'prop-types';
import { useButtonStyles } from './styles';
import { useHeadingStyles } from './styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const DefaultButton = (props) => {
  const classes = useButtonStyles();
  return (
    <Button variant='contained' color='default' className={classes.button} {...props}>{props.text}</Button>
  )
};

const Counter = (props) => {
  const classes = useHeadingStyles();
  return (
    <Container fixed>
      <Typography component='h1' variant='h3' className={classes.h3}>Result: {props.value}</Typography>
      <DefaultButton id='increment' onClick={props.increment} text='Increment'/>
      <DefaultButton id='decrement' onClick={props.decrement} text='Decrement'/>
      <DefaultButton id='reset' onClick={props.reset} text='Reset'/>
    </Container>
  )
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Counter;