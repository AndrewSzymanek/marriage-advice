import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const options = {
      url: "http://localhost:9000/submitAdvice",
      method: "POST",
      data: this.state,
    };
    //for testing purposes, going to keep logging the response
    axios(options).then((response) => console.log(response));
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { body } = this.state;
    return (
      <div>
        <h1>I am a submit page</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Submit your advice for the newlyweds!</Form.Label>
            <Form.Control
              as="textarea"
              onChange={this.changeHandler}
              type="text"
              name="body"
              value={body}
              rows={3}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Submit;
