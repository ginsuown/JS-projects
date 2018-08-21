import React, { Component } from "react";
import "./index.css";

export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", tags: [], focus: 0 };
  }

  //input for controlled component
  updateInput = e => {
    this.setState({ input: e.target.value });
  };

  //add a tag to the state and reset input form
  addTag = e => {
    e.preventDefault();
    if (this.state.input !== "") {
      this.setState({
        tags: [...this.state.tags, this.state.input],
        input: ""
      });
    }
  };

  //update whether or not the input was focused
  updateFocus = i => {
    this.setState({ focus: i });
  };

  removeTag = i => {
    this.setState({
      tags: [...this.state.tags.slice(0, i), ...this.state.tags.slice(i + 1)]
    });
  };

  render() {
    return (
      <div className="Tags">
        <div className="Tags-Line">
          {this.state.tags.map((tag, index) => {
            return (
              <span className="Tag">
                {tag}{" "}
                <button
                  className="X-Button"
                  onClick={() => this.removeTag(index)}
                >
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
              </span>
            );
          })}
          <form className="Input-Form" onSubmit={this.addTag}>
            <input
              className="Input"
              value={this.state.input}
              placeholder="Add a tag..."
              onChange={this.updateInput}
              onFocus={() => this.updateFocus(1)}
              onBlur={() => this.updateFocus(0)}
            />
          </form>
        </div>
        <hr className={this.state.focus ? "Line-Focus" : "Line-Blur"} />
      </div>
    );
  }
}
