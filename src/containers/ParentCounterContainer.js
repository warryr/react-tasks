import React from 'react';
import CounterContainer from './CounterContainer';
import ParentCounter from "../views/ParentCounter";

export default class ParentCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onAddCounter = this.onAddCounter.bind(this);
    this.onDeleteCounter = this.onDeleteCounter.bind(this);
    this.onResetCounters = this.onResetCounters.bind(this);
    this.state = {
      counters: [
        {id: 1}
      ],
      lastId: 1,
      ableToDelete: false,
      childMustReset: true,
      executedOperation: 'reset',
    };
  }

  render() {
    console.log('Parent: render');
    return (
      <div>
        <ParentCounter onAdd={this.onAddCounter} onDelete={this.onDeleteCounter} onReset={this.onResetCounters}
                       ableToDel={this.state.ableToDelete}/>
        {this.state.counters.map(counter => {
            return counter.id === 1 ?
              <CounterContainer key={counter.id} id={counter.id} mustReset={this.state.childMustReset}
                                executed={this.state.executedOperation}/> :
              <CounterContainer key={counter.id} id={counter.id} executed={this.state.executedOperation}/>
          })}
      </div>
    );
  }

  componentDidMount() {
    console.log('Parent: componentDidMount');
  }

  componentWillUnmount() {
    console.log('Parent: componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Parent: shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Parent: componentDidUpdate');
    if (this.state.counters.length === 1 && this.state.ableToDelete) {
      this.setState({
        ...this.state,
        ableToDelete: false,
      })
    }
  }

  onAddCounter() {
    this.setState(state => ({
      counters: [
        {id: state.lastId + 1},
        ...state.counters,
      ],
      lastId: state.lastId + 1,
      ableToDelete: true,
      childMustReset: false,
      executedOperation: 'add',
    }));
  }

  onDeleteCounter() {
    if (this.state.ableToDelete) {
      this.setState(state => {
        const array = state.counters;
        array.splice(0, 1);
        console.log('Counter ' + state.lastId + ' deleted');
        return {
          ...state,
          counters: array,
          executedOperation: 'delete',
        };
      });
    }
  }

  onResetCounters() {
    this.setState(() => ({
      counters: [
        {id: 1}
      ],
      lastId: 1,
      ableToDelete: false,
      childMustReset: true,
      executedOperation: 'reset',
    }));
  }
}