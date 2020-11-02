import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("After setState: " + this.state.count);
      }
    );
    console.log(this.state.count);
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("After setState: " + this.state.count);
      }
    );
    console.log(this.state.count);
  }
  incrementFive() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>
          {this.state.count} Increment
        </button>
        <button onClick={() => this.incrementFive()}>
          {this.state.count} Increment Five
        </button>
      </div>
    );
  }
}
