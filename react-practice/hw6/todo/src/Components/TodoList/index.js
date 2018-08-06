import React, { Component } from "react";
import "./index.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 2, items: [], input: "" };
  }

  addItem = () => {
    if (this.state.input) {
      this.setState({
        items: [...this.state.items, { value: this.state.input, done: false }],
        input: ""
      });
    }
  };

  textChange = e => {
    this.setState({ input: e.target.value });
  };

  filterChange = i => {
    this.setState({ selected: i });
  };

  getClassName = i => {
    if (i === this.state.selected) {
      return "selected";
    } else {
      return "notSelected";
    }
  };

  toggle = index => {
    let temp = [...this.state.items];
    temp[index].done = !temp[index].done;
    this.setState({ items: [...temp] });
  };
  render() {
    return (
      <div className="TodoList">
        <div className="overlay">
          <h1>To-do List</h1>
          <div className="inputForm">
            <input
              type="text"
              onChange={this.textChange}
              value={this.state.input}
              placeholder="Add a task"
            />
            <button onClick={this.addItem}>Add</button>
          </div>
          <br />
          <br />
          <div className="buttons">
            <button
              onClick={() => this.filterChange(2)}
              className={this.getClassName(2)}
            >
              All
            </button>
            <button
              onClick={() => this.filterChange(0)}
              className={this.getClassName(0)}
            >
              Active
            </button>
            <button
              onClick={() => this.filterChange(1)}
              className={this.getClassName(1)}
            >
              Completed
            </button>
          </div>
        </div>
        <ul className="content">
          {this.state.items.map((item, index) => {
            switch (this.state.selected) {
              case 2:
                return (
                  <li
                    className={item.done ? "completed" : "active"}
                    onClick={() => this.toggle(index)}
                  >
                    {item.value}
                  </li>
                );
              case 0:
                if (item.done === false) {
                  return (
                    <li className="active" onClick={() => this.toggle(index)}>
                      {item.value}
                    </li>
                  );
                }
                break;
              case 1:
                if (item.done === true) {
                  return (
                    <li
                      className="completed"
                      onClick={() => this.toggle(index)}
                    >
                      {item.value}
                    </li>
                  );
                }
                break;
              default:
                return item;
            }
          })}
        </ul>
      </div>
    );
  }
}
