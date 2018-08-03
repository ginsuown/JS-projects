import React, { Component } from "react";
import StatusBar from "./components/StatusBar";
import HomeScreen from "./components/HomeScreen";
import Docker from "./components/Docker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatusBar text="Status" />
        <HomeScreen numIcons={16} />
        <Docker />
      </div>
    );
  }
}

export default App;
