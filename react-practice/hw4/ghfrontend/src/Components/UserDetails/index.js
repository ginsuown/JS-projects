import React, { Component } from "react";
import Axios from "axios";
import "./index.css";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  render() {
    if (this.props.selected) {
      Axios({
        method: "get",
        url: "https://api.github.com/users/" + this.props.selected
      }).then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      });
    }
    return (
      <div className="UserDetails">
        <h1>Details</h1>
        {!this.props.selected ? (
          <p className="ClickOne">Click a user on the left to view details</p>
        ) : null}
        <h2>{this.state.data.name}</h2>
        <h3>{this.state.data.location}</h3>
        {this.props.selected ? (
          <h4>Followers: {this.state.data.following}</h4>
        ) : null}
        {this.props.selected ? (
          <h4>Following: {this.state.data.followers}</h4>
        ) : null}
      </div>
    );
  }
}
