import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  return (
    <div>
      <h1 id='result'>Result: {props.value}</h1>
      <button id='increment' onClick={props.increment}>Increment</button>
      <button id='decrement' onClick={props.decrement}>Decrement</button>
      <button id='reset' onClick={props.reset}>Reset</button>
    </div>
  )
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Counter;