import React, { Component } from "react";
import Input from "./Input";

export class InputFocus extends Component {
  constructor(props) {
    super(props);
    this.compRef = React.createRef();
  }
  handleClick = () => {
    console.log(this.compRef.current.inputFocus());
  };
  render() {
    return (
      <div>
        <Input ref={this.compRef} />
        <button onClick={this.handleClick}>Input Forcus</button>
      </div>
    );
  }
}

export default InputFocus;
