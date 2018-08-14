import React, { Component } from "react";
import Axios from "axios";
import Filters from "../Filters";
import Emails from "../Emails";
import Content from "../Content";
import "./App.css";
import { sampledata } from "./sampledata";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      filter: "inbox",
      selected: null,
      inboxCount: 0,
      sentCount: 0,
      draftCount: 0,
      trashCount: 0
    };
  }

  componentDidMount() {
    //Get data from API, otherwise, fall back on hard-coded data
    Axios({
      method: "get",
      url: "http://api.haochuan.io/emails"
    })
      .then(res => {
        this.setState({
          emails: res.data.emailData
        });
      })
      .catch(err => {
        console.log(
          "Failed to load data, falling back to hard-coded data. Error: " + err
        );
        this.setState({
          emails: sampledata.emailData
        });
      });
  }

  //Update state with which filter was selected
  setFilter = setFilter => {
    this.setState({ filter: setFilter, selected: null });
  };

  //Update state with which email was selected
  selectEmail = index => {
    this.setState({
      selected: index,
      emails: [
        ...this.state.emails.slice(0, index),
        { ...this.state.emails[index], read: "true" },
        ...this.state.emails.slice(index + 1)
      ]
    });
  };

  deleteEmail = () => {
    const index = this.state.selected;
    this.setState({
      selected: null,
      emails: [
        ...this.state.emails.slice(0, index),
        { ...this.state.emails[index], tag: "deleted" },
        ...this.state.emails.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <Filters //Left side bar to toggle filters
          setFilter={this.setFilter}
          currentFilter={this.state.filter}
          //count number of items unread
          inboxCount={this.state.emails.reduce((total, currentItem) => {
            if (currentItem.read === "false") {
              return (total += 1);
            } else {
              return total;
            }
          }, 0)}
          //count number of items in sent
          sentCount={this.state.emails.reduce((total, currentItem) => {
            if (currentItem.tag === "sent") {
              return (total += 1);
            } else {
              return total;
            }
          }, 0)}
          //count number of items in drafts
          draftCount={this.state.emails.reduce((total, currentItem) => {
            if (currentItem.tag === "draft") {
              return (total += 1);
            } else {
              return total;
            }
          }, 0)}
          //count number of items in trash
          trashCount={this.state.emails.reduce((total, currentItem) => {
            if (currentItem.tag === "deleted") {
              return (total += 1);
            } else {
              return total;
            }
          }, 0)}
        />
        <Emails //List of emails
          filter={this.state.filter}
          emails={this.state.emails}
          select={this.selectEmail}
          selected={this.state.selected}
        />
        <Content //Display email content
          email={this.state.emails[this.state.selected]}
          delete={this.deleteEmail}
        />
      </div>
    );
  }
}

export default App;
