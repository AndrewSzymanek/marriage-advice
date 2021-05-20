import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  makeAPICall() {
    fetch("http://localhost:8000/notes/60a5844eb703366c0520ca5d")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.makeAPICall();
  }

  render() {
    return (
      <div>
        <h1>I am a list page</h1>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default List;
