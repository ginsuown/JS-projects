import React, { Component } from "react";
import Axios from "axios";
import Filters from "../Filters";
import Emails from "../Emails";
import Content from "../Content";
import "./App.css";

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
    Axios({
      method: "get",
      url: "http://api.haochuan.io/emails"
    }).then(res => {
      this.setState({ emails: res.data.emailData });
    });
  }

  setFilter = setFilter => {
    this.setState({ filter: setFilter });
  };

  selectEmail = index => {
    console.log(index);
    this.setState({
      selected: index,
      emails: [
        ...this.state.emails.slice(0, index),
        { ...this.state.emails[index], read: "true" },
        ...this.state.emails.slice(index + 1)
      ]
    });
  };

  render() {
    console.log(this.state.emails);
    return (
      <div className="App">
        <Filters
          setFilter={this.setFilter}
          currentFilter={this.state.filter}
          inboxCount={this.state.inboxCount}
          sentCount={this.state.sentCount}
          draftCount={this.state.draftCount}
          trashCount={this.state.trashCount}
        />
        <Emails
          filter={this.state.filter}
          emails={this.state.emails}
          select={this.selectEmail}
        />
        <Content email={this.state.emails[this.state.selected]} />
      </div>
    );
  }
}

export default App;
