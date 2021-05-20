import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Submit extends Component {
  render() {
    return (
      <div>
        <h1>I am a submit page</h1>
        <Form>
          <Form.Group>
            <Form.Label>Submit your advice for the newlyweds!</Form.Label>
            <Form.Control as="textarea" rows={3}></Form.Control>
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
