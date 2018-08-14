import React, { Component } from "react";
import "./index.css";

//Counter component
function Counter(props) {
  return <div className="Counter">{props.count}</div>;
}

export default class Filters extends Component {
  render() {
    const {
      setFilter,
      currentFilter,
      inboxCount,
      sentCount,
      draftCount,
      trashCount
    } = this.props;

    return (
      <div className="Filter">
        <div className="Compose">
          <button>
            Compose <i className="fas fa-pencil-alt compose-icon" />
          </button>
        </div>
        <div className="Filter-Filters">
          <button
            className={currentFilter === "inbox" ? "Filter-Selected" : null}
            onClick={() => setFilter("inbox")}
          >
            <div>
              <i className="fas fa-inbox filter-icon" />
              Inbox
            </div>
            <Counter count={inboxCount} />
          </button>
          <button
            className={currentFilter === "sent" ? "Filter-Selected" : null}
            onClick={() => setFilter("sent")}
          >
            <div>
              <i className="fas fa-paper-plane filter-icon" />
              Sent
            </div>
            <Counter count={sentCount} />
          </button>
          <button
            className={currentFilter === "drafts" ? "Filter-Selected" : null}
            onClick={() => setFilter("drafts")}
          >
            <div>
              <i className="fas fa-edit filter-icon" />
              Drafts
            </div>
            <Counter count={draftCount} />
          </button>
          <button
            className={currentFilter === "deleted" ? "Filter-Selected" : null}
            onClick={() => setFilter("deleted")}
          >
            <div>
              <i className="fas fa-trash filter-icon" />
              Trash
            </div>
            <Counter count={trashCount} />
          </button>
        </div>
      </div>
    );
  }
}
