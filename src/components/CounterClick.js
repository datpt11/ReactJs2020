import React, { Component } from "react";
import withCounter from "./withCounter";

class CounterClick extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        {this.props.name} {count}
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
}

export default withCounter(CounterClick);
