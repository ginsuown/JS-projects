import React, { Component } from "react";
import "./index.css";

class Ordinal extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", error: false, output: "" };
  }

  updateInput = e => {
    this.setState({ input: e.target.value, error: false });
    let dup = e.target.value;
    if (Number.isNaN(+dup)) {
      this.setState({ error: true, output: "-----" });
    } else if (dup === "") {
      this.setState({ output: "" });
    } else {
      switch (Number.parseInt(dup[dup.length - 1])) {
        case 1:
          this.setState({ output: dup + "st" });
          break;
        case 2:
          this.setState({ output: dup + "nd" });
          break;
        case 3:
          this.setState({ output: dup + "rd" });
          break;
        default:
          this.setState({ output: dup + "th" });
      }
    }
  };

  render() {
    return (
      <div className="Ordinal">
        <h2>Enter a number and click "convert"</h2>
        Input:{" "}
        <input
          className={this.state.error ? "Input-Error" : "Input"}
          value={this.state.input}
          onChange={this.updateInput}
        />
        <span className={this.state.error ? "Error-Message" : "No-Error"}>
          {" "}
          Error: Input is not a number
        </span>
        <br />
        <br />
        <button onClick={this.convert}>Convert</button>
        <br />
        <p className={this.state.error ? "Error" : null}>
          Output: {this.state.output}
        </p>
      </div>
    );
  }
}

export default Ordinal;
