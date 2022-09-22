import React, { Component } from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import { Button } from "react-bootstrap";

class ProcessRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  loginClicked = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    let page;

    page = isLoggedIn ? <HomePage /> : <Login />;
    return (
      <div>
        {page}
        <Button onClick={this.loginClicked}>Login</Button>
      </div>
    );
  }
}

export default ProcessRendering;
