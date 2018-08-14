import React, { Component } from "react";
import "./index.css";

export default class Emails extends Component {
  constructor(props) {
    super(props);
  }

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
    if (emails !== []) {
      return emails.map(email => {
        const dateParts = email.time.split(/[\s\-\:]/);
        return (
          <li className="Emails-Email">
            <h3 className="Emails-Subject">{email.subject}</h3>
            <div className="Emails-Content">
              <p>{email.from}</p>
              <p>
                {months[Number.parseInt(dateParts[1]) - 1] +
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
    const filteredEmails = emails.filter(item => item.tag === filter);
    console.log(filteredEmails);
    return <div className="Emails">{this.renderEmails(filteredEmails)}</div>;
  }
}
