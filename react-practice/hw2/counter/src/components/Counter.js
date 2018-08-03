import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.startVal };
  }
  sub = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div className="counter">
        <h1 className="number">{this.state.counter}</h1>
        <div className="buttons">
          <button className="button" onClick={this.sub}>
            -
          </button>
          <button className="button" onClick={this.add}>
            +
          </button>
        </div>
      </div>
    );
  }
}
