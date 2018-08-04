import React, { Component } from "react";
import Timer from "../Timer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer initialValue={0} />
      </div>
    );
  }
}

export default App;
