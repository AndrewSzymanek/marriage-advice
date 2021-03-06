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

  render() {
    return (
      <div>
        <h1>Marriage Advice</h1>
        <p>{this.state.apiResponse}</p>
        {console.log(JSON.stringify(this.state.apiResponse))}
      </div>
    );
  }
}

export default List;
