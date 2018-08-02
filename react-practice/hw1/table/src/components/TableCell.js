import React, { Component } from "react";

import "./Table.css";

export default function TableCell(props) {
  return <td className="TableCell">{props.data}</td>;
}
