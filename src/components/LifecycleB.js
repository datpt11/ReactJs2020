import React, { Component } from "react";

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dat2",
    };
    console.log("Lifecycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle B componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("Lifecycle B shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("Lifecycle B getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("Lifecycle B componentDidUpdate");
  }
  render() {
    console.log("Lifecycle B render");
    return <div>{this.state.name}</div>;
  }
}
