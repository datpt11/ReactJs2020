import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      skills: "react",
    };
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handleSkillsChange = (e) => {
    this.setState({
      skills: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `${this.state.username} - ${this.state.comments} - ${this.state.skills}`
    );
  };
  render() {
    const { username, comments, skills } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={this.handleUsernameChange}
            type="text"
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>skills</label>
          <select value={skills} onChange={this.handleSkillsChange}>
            <option value="vue">Vue</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
