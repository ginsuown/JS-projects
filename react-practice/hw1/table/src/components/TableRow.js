import React, { Component } from "react";
import TableCell from "./TableCell";

export default class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let row = [];
    this.props.cells.forEach(item => {
      row.push(<TableCell data={item} />);
    });
    return <tr>{row}</tr>;
  }
}
