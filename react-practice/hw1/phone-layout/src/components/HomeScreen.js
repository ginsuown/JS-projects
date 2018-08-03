import React, { Component } from "react";
import IconRow from "./IconRow";
import "./HomeScreen.css";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rows = [];
    let numRows = Math.ceil(this.props.numIcons / 4);
    for (let i = 0; i < numRows; i++) {
      if (i === numRows - 1) {
        rows.push(<IconRow numIcons={this.props.numIcons % 4 || 4} />);
      } else {
        rows.push(<IconRow numIcons={4} />);
      }
    }
    return <div className="Home-screen">{rows}</div>;
  }
}
