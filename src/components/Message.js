import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Helo World",
    };
  }
  handleChangeMessage() {
    this.setState({
      message: "Hello Dat",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleChangeMessage()}>Click me !!!</button>
      </div>
    );
  }
}
