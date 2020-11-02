import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({
      message: "goodbye",
    });
  };
  render() {
    return (
      <div>
        {this.state.message}
        {/* // <button onClick={this.handleClick.bind(this)}>Show message</button> khong dung cach nay
         // <button onClick={() => this.handleClick()}>Show message</button>arrow f truyen tham so cho parent */}
        <button onClick={this.handleClick}>Show message</button>
      </div>
    );
  }
}
