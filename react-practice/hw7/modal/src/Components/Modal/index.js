import React, { Component } from "react";
import "./index.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  //Show modal
  showModal = () => {
    this.setState({ visible: true });
  };

  //Hide modal
  hideModal = () => {
    this.setState({ visible: false });
  };

  //Submit modal; currently just hides it
  submitModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const {
      buttonText = "Confirm",
      cancelButtonText = "Cancel",
      content = "Default Content"
    } = this.props;
    const widthStyle = { width: (this.props.width || "500") + "px" };

    return (
      <div className="Modal">
        <div className={this.state.visible ? "Modal-Background" : null} />
        <div
          className={this.state.visible ? "Modal-Visible" : "Modal-Hidden"}
          style={widthStyle}
        >
          <h3>Modal Title</h3>
          <hr />
          <p className="Modal-Content">{content}</p>
          <hr />
          <div className="Modal-Buttons">
            <button className="Modal-Cancel-Button" onClick={this.hideModal}>
              {cancelButtonText}
            </button>
            <button className="Modal-Button" onClick={this.submitModal}>
              {buttonText}
            </button>
          </div>
        </div>
        <button className="Modal-Show-Button" onClick={this.showModal}>
          Launch Demo Modal
        </button>
      </div>
    );
  }
}

export default Modal;
