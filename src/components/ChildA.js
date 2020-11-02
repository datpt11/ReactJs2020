import React, { Component } from "react";

class ChildA extends Component {
  render() {
    console.log("ChildA");
    return <div>{this.props.name}</div>;
  }
}

export default ChildA;
