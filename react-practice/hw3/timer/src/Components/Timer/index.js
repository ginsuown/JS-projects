import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: this.props.initialValue, running: false };
  }

  startTimer = () => {
    this.setState({ running: true });
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  };

  stopTimer = () => {
    this.setState({ running: false });
    clearInterval(this.interval);
  };

  resetTimer = () => {
    this.setState({ time: 0 });
  };
  loader = () => {
    if (this.state.running) {
      return <div className="loader" />;
    }
  };

  startStopButton = () => {
    if (this.state.running) {
      return (
        <button className="Button Stop" onClick={this.stopTimer}>
          STOP
        </button>
      );
    } else {
      return (
        <button className="Button Start" onClick={this.startTimer}>
          START
        </button>
      );
    }
  };
  render() {
    return (
      <div className="Timer">
        <h1 className="Time">{this.state.time}</h1>

        {this.loader()}
        <div className="Buttons">
          {this.startStopButton()}
          <button className="Button" onClick={this.resetTimer}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}
