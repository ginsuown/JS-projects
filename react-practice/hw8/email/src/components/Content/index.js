import React from "react";
import "./index.css";

export default function Content(props) {
  if (props.email === undefined) {
    return (
      <div className="Content">
        <div className="Content-Empty">No email selected</div>
      </div>
    );
  } else {
    const { from, address, subject, time, message } = props.email;
    return (
      <div className="Content">
        <div className="Content-Header">
          <div className="Header-Top">
            <h2 className="Content-Subject">{subject}</h2>
            <button className="Content-Delete" onClick={props.delete}>
              <i className="far fa-trash-alt delete-icon" />
            </button>
          </div>
          <div className="Header-Bottom">
            <h3 className="Content-From">
              From:{" "}
              <span className="Content-Address">
                {from} &lt;
                {address}
                &gt;
              </span>
            </h3>
            <h3 className="Content-Time">{time}</h3>
          </div>
        </div>
        <div className="Content-Content">{message}</div>
      </div>
    );
  }
}
