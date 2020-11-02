import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export default class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dat",
    };
    console.log("Lifecycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }
  handleChange = () => {
    this.setState({
      name: "mike",
    });
  };
  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        {this.state.name}
        <button onClick={this.handleChange}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}
