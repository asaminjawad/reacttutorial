import { Button, Card } from "react-bootstrap";

import React, { Component } from "react";

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "this.state.title",
      bodyText: "this.state.bodyText",
    };
  }

  changeText = () => {
    this.setState({
      title: "new head",
      bodyText: "new body",
    });
  };

  render() {
    const { title, bodyText } = this.state;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Button variant="primary" onClick={this.changeText}>
              Change Text
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
