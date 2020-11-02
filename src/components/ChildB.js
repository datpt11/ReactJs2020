import React, { PureComponent } from "react";

class ChildB extends PureComponent {
  render() {
    console.log("ChildB");
    return <div>{this.props.name}</div>;
  }
}

export default ChildB;
