import React, { Component } from "react";
import withCounter from "./withCounter";

export class CounterHover extends Component {
  render() {
    const { count, increment } = this.props;
    return <div onMouseOver={increment}>{count}</div>;
  }
}

export default withCounter(CounterHover);
