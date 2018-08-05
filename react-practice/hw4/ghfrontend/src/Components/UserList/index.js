import React from "react";
import Axios from "axios";
import ListItem from "../ListItem";
import "./index.css";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], selected: 0 };
  }
  componentDidMount() {
    Axios({
      method: "get",
      url: "https://api.github.com/users?per_page=100"
    }).then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(item => {
            return (
              <ListItem
                id={this.state.data.id}
                userName={this.state.data.login}
                img={this.state.data.avatar_url}
                key={this.state.data.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
