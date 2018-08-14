import React, { Component } from "react";
import "./index.css";

export default class Emails extends Component {
  renderEmails = emails => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ];
    if (emails.length > 0) {
      return emails.map((email, index) => {
        const dateParts = email.time.split(/[\s\-:]/);
        return (
          <li
            className="Emails-Email"
            key={index}
            onClick={() => this.props.select(email.originalIndex)}
          >
            <div className="Emails-Header">
              <h3 className="Emails-Subject">{email.subject}</h3>
              <div
                className={email.read === "false" ? "Unread-Circle" : null}
              />
            </div>

            <div className="Emails-Content">
              <p>{email.from}</p>
              <p>
                {months[Number.parseInt(dateParts[1], 10) - 1] +
                  " " +
                  dateParts[2] +
                  " " +
                  dateParts[0]}
              </p>
            </div>
          </li>
        );
      });
    } else {
      return <div className="Emails-Empty">Nothing in this folder</div>;
    }
  };

  render() {
    const { emails, filter } = this.props;
    const filteredEmails = emails
      .map((item, index) => {
        return { ...item, originalIndex: index };
      })
      .filter(item => item.tag === filter);
    console.log(filteredEmails);
    return <div className="Emails">{this.renderEmails(filteredEmails)}</div>;
  }
}
