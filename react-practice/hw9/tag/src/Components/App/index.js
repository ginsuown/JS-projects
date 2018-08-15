import React, { Component } from "react";
import Tags from "../Tags";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Try typing in a tag and pressing enter!</h4>
        <Tags />
      </div>
    );
  }
}

export default App;
