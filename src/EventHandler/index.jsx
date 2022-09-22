import React, { Component } from "react";

class EventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typedText: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ typedText: e.target.value }, () => {
      console.log(this.state.typedText);
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.onChangeHandler} />
        <p>{this.state.typedText}</p>
      </div>
    );
  }
}

export default EventHandler;
