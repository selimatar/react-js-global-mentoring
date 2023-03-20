import React from "react";

function Button(props) {
  return React.createElement("button", { onClick: props.handleClick }, props.name);
}

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { handleClick: this.handleIncrement, name: "+1" }, null),
      React.createElement(Button, { handleClick: this.handleDecrement, name: "-1" }, null),
      React.createElement("p", null, this.state.count)
    );
  }
}
