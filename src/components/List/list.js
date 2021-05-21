import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  makeGetRequest() {
    fetch("http://localhost:9000/getAdvice")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.makeGetRequest();
  }

  // dataTable() {
  //   return this.state.apiResponse.map((data, i) => {
  //     //map the response with a class?
  //   });
  // }

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
