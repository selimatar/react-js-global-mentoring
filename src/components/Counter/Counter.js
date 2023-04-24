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
        React.createElement("h2", { key: 0 }, "Counter"),
        React.createElement(Button, { key: 1, handleClick: this.handleIncrement, name: "+1" }, null),
        React.createElement(Button, { key: 2, handleClick: this.handleDecrement, name: "-1" }, null),
        React.createElement("p", { key: 3, title: "count" }, this.state.count)
      ]
    );
  }
}

export default Counter;