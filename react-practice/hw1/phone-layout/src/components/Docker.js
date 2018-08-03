import React, { Component } from "react";
import IconRow from "./IconRow";
import "./Docker.css";

export default class Docker extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Docker">
        <IconRow numIcons={4} />
      </div>
    );
  }
}
