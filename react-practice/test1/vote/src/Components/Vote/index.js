import React, { Component } from "react";
import ListItem from "../ListItem";
import "./index.css";

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      description: "",
      noName: false,
      noDescription: false
    };
  }

  //update state for controlled component input box
  nameChange = e => {
    this.setState({ name: e.target.value });
  };

  descriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  addItem = () => {
    this.setState({ noName: false, noDescription: false });
    if (this.state.name && this.state.description) {
      this.setState({
        data: [
          {
            name: this.state.name,
            description: this.state.description,
            votes: 0
          },
          ...this.state.data
        ],
        name: "",
        description: ""
      });
    } else {
      if (!this.state.name) {
        this.setState({ noName: true });
      }
      if (!this.state.description) {
        this.setState({ noDescription: true });
      }
    }
  };

  updateItem = (index, amount) => {
    this.setState({
      data: [
        ...this.state.data.slice(0, index),
        {
          ...this.state.data[index],
          votes: this.state.data[index].votes + amount
        },
        ...this.state.data.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div className="votes">
        <h1>Simple Voting App</h1>
        <input
          type="text"
          value={this.state.name}
          onChange={this.nameChange}
          placeholder="Enter a new name"
          className={this.state.noName ? "Missing" : "NotMissing"}
        />
        <input
          type="text"
          value={this.state.description}
          onChange={this.descriptionChange}
          placeholder="Enter a new description"
          className={this.state.noDescription ? "Missing" : "NotMissing"}
        />
        <button onClick={this.addItem}>Add Item</button>
        <p>
          {this.state.noName || this.state.noDescription
            ? "You must provide both a name and a description"
            : null}
        </p>
        <ul className="ItemList">
          {this.state.data.map((item, index) => {
            return (
              <ListItem
                name={item.name}
                description={item.description}
                votes={item.votes}
                upvote={() => this.updateItem(index, 1)}
                downvote={() => this.updateItem(index, -1)}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
