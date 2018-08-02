import React from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MyContent">
        <p>{this.props.content}</p>
      </div>
    );
  }
}
