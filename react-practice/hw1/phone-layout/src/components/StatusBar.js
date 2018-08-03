import React from "react";
import "./StatusBar.css";

export default class StatusBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Status-bar">
        <p>{this.props.text}</p>
      </div>
    );
  }
}
