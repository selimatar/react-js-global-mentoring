import React from "react";
import "./counter.css"

function Button(props) {
  return React.createElement("button", { onClick: props.handleClick }, props.name);
}

export class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = { count:0 }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }
  
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
      { className: 'counter' },
      [
        React.createElement("h2", null, "Counter"),
        React.createElement(Button, { handleClick: this.handleIncrement, name: "+1" }, null),
        React.createElement(Button, { handleClick: this.handleDecrement, name: "-1" }, null),
        React.createElement("p", null, this.state.count)
      ]
    );
  }
}

export default Counter;