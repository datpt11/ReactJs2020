import React, { Component } from "react";

export default class ClassClick extends Component {
  handleClick() {
    console.log("class click");
  }
  render() {
    return <button onClick={this.handleClick}>Class Click</button>;
  }
}
