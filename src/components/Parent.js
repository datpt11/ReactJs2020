import React, { Component } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import MemoComp from "./MemoComp";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dat",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "Dat",
      });
    }, 2000);
  }

  render() {
    console.log("Parent");
    return (
      <div>
        P Component
        <ChildA name={this.state.name} />
        <ChildB name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
