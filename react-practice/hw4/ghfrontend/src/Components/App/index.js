import React, { Component } from "react";
import "./App.css";
import UserList from "../UserList";
import UserDetails from "../UserDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
  }
  loadDetails = name => {
    this.setState({ selected: name });
    console.log("Load details called with " + name);
  };
  render() {
    return (
      <div className="App">
        <UserList loadDetails={this.loadDetails} />
        <UserDetails selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
