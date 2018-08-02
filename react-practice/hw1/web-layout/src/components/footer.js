import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MyFooter">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
