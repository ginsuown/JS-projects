import React, { Component } from "react";
import "./index.css";

export default class Filters extends Component {
  render() {
    const { setFilter } = this.props;

    return (
      <div className="Filter">
        <div className="Compose">
          <button>Compose</button>
        </div>
        <div className="Filter-Filters">
          <button onClick={() => setFilter("inbox")}>Inbox</button>
          <button onClick={() => setFilter("sent")}>Sent</button>
          <button onClick={() => setFilter("drafts")}>Drafts</button>
          <button onClick={() => setFilter("trash")}>Trash</button>
        </div>
      </div>
    );
  }
}
