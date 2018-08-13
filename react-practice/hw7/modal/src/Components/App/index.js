import React, { Component } from "react";
import "./App.css";
import Modal from "../Modal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">Sample App Content</p>
        <Modal
          buttonText="Submit"
          cancelButtonText="Cancel"
          content="This is the passed modal content"
          width={500}
        />
      </div>
    );
  }
}

export default App;
