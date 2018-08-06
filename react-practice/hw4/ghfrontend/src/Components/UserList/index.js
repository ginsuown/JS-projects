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
      <div className="UserList">
        <ul>
          <h1>List</h1>
          {this.state.data.map((item, index) => {
            return (
              <ListItem
                details={() =>
                  this.props.loadDetails(this.state.data[index].login)
                }
                id={this.state.data[index].id}
                userName={this.state.data[index].login}
                img={this.state.data[index].avatar_url}
                key={this.state.data[index].id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
