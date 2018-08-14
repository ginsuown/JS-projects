import React, { Component } from "react";
import Axios from "axios";
import Filters from "../Filters";
import Emails from "../Emails";
import Content from "../Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { emails: [], filter: "inbox" };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url: "http://api.haochuan.io/emails"
    }).then(res => {
      console.log("Data Received: " + res.data);
      this.setState({ emails: res.data.emailData });
    });
  }

  setFilter = setFilter => {
    this.setState({ filter: setFilter });
  };

  render() {
    return (
      <div className="App">
        <Filters setFilter={this.setFilter} />
        <Emails filter={this.state.filter} emails={this.state.emails} />
        <Content />
      </div>
    );
  }
}

export default App;
