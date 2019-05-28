import React from 'react';
import Counter from '../views/Counter';

export default class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = {counter: 0, ableToDecrement: false};
  }

  render() {
    return <Counter value={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter}
                    reset={this.resetCounter} ableToDec={this.state.ableToDecrement}/>
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.counter === 0 && this.state.ableToDecrement) {
      this.setState({
        ...this.state,
        ableToDecrement: false,
      })
    }
  }

  incrementCounter() {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1,
      ableToDecrement: true,
    });
  }

  decrementCounter() {
    if (this.state.ableToDecrement) {
      this.setState({
        ...this.state,
        counter: this.state.counter - 1,
      });
    }
  }

  resetCounter() {
    this.setState({
      ...this.state,
      counter: 0,
      ableToDecrement: false
    });
  }
}