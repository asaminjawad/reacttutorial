import React, { Component } from "react";
import { Form } from "react-bootstrap";

class EventHandlerSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchStatus: "",
    };
  }

  switchHandler = (e) => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <div>
          <Form>
            <Form.Select
              aria-label="Default select example"
              onChange={this.switchHandler}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form>
        </div>
        <div>
          <p>Selected value: {this.state.switchStatus}</p>
        </div>
      </div>
    );
  }
}

export default EventHandlerSwitch;
