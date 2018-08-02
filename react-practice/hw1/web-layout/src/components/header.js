import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MyHeader">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
