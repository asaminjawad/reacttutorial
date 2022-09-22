import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export class Login extends Component {
  render() {
    return (
      <div>
        <h1>LogIn</h1>
        <Form sm={8}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {" "}
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
