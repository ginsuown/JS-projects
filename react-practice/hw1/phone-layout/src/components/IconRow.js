import React, { Component } from "react";
import Icon from "./Icon.js";
import "./IconRow.css";

export default class IconRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let row = [];
    for (let i = 0; i < this.props.numIcons; i++) {
      row.push(<Icon />);
    }
    return <div className="Icon-row">{row} </div>;
  }
}
