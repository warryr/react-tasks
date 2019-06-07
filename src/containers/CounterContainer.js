import React from 'react';
import Counter from '../views/Counter';
import PropTypes from 'prop-types';

export default class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      ableToDecrement: false,
      initialState: true,
    };
  }

  componentDidMount() {
    console.log('Counter ' + this.props.id + ': componentDidMount');
  }

  componentWillUnmount() {
    console.log('Counter ' + this.props.id + ': componentWillUnmount');
  }

  /*static getDerivedStateFromProps(props, state) {
    console.log('Counter ' + props.id + ': getDerivedStateFromProps');
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Counter ' + this.props.id + ': getSnapshotBeforeUpdate');
    return null;
  }*/

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Counter ' + this.props.id + ': componentDidUpdate');
    if (this.state.counter === 0 && this.state.ableToDecrement) {
      this.setState({
        ableToDecrement: false,
        initialState: true,
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.executed === 'add') {
      console.log(
        'Counter ' + this.props.id + ': UNSAFE_componentWillReceiveProps'
      );
      return this.state.counter % 2 === 0 ? this.incrementCounter() : undefined;
    }

    if (nextProps.executed === 'delete') {
      console.log(
        'Counter ' + this.props.id + ': UNSAFE_componentWillReceiveProps'
      );
      return this.state.counter % 2 === 1 ? this.decrementCounter() : undefined;
    }

    if (
      nextProps.mustReset &&
      (!this.props.mustReset || !this.state.initialState)
    ) {
      console.log(
        'Counter ' + this.props.id + ': UNSAFE_componentWillReceiveProps'
      );
      this.resetCounter();
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const bool =
      nextState.counter !== this.state.counter ||
      nextState.ableToDecrement !== this.state.ableToDecrement;
    console.log(
      'Counter ' + this.props.id + ': shouldComponentUpdate: ' + bool
    );
    return bool;
  }

  incrementCounter = () => {
    this.setState(state => ({
      counter: state.counter + 1,
      ableToDecrement: true,
      initialState: false,
    }));
  };

  decrementCounter = () => {
    if (this.state.ableToDecrement) {
      this.setState(state => ({
        counter: state.counter - 1,
      }));
    }
  };

  resetCounter = () => {
    this.setState({
      counter: 0,
      ableToDecrement: false,
      initialState: true,
    });
  };

  render() {
    console.log('Counter ' + this.props.id + ': render');
    return (
      <Counter
        value={this.state.counter}
        increment={this.incrementCounter}
        decrement={this.decrementCounter}
        reset={this.resetCounter}
        ableToDec={this.state.ableToDecrement}
      />
    );
  }
}

CounterContainer.propTypes = {
  id: PropTypes.number.isRequired,
  mustReset: PropTypes.bool,
  executed: PropTypes.string.isRequired,
};
