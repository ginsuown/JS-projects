import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import * as actions from "../../actions";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", focus: 0 };
  }

  //input for controlled component
  updateInput = e => {
    this.setState({ input: e.target.value });
  };

  //add a tag to the state and reset input form
  addTag = e => {
    e.preventDefault();
    if (this.state.input !== "") {
      this.props.addTag(this.state.input);
      this.setState({ input: "" });
    }
  };

  //update whether or not the input was focused
  updateFocus = i => {
    this.setState({ focus: i });
  };

  //call redux dispatch in props
  removeTag = i => {
    this.props.deleteTag(i);
  };

  render() {
    return (
      <div className="Tags">
        <div className="Tags-Line">
          {this.props.tags.map((tag, index) => {
            return (
              <span className="Tag">
                {tag}{" "}
                <button
                  className="X-Button"
                  onClick={() => this.removeTag(index)}
                >
                  <i class="fa fa-times" aria-hidden="true" />
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

const mapStateToProps = state => {
  return {
    tags: state.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTag: input => dispatch(actions.addTag(input)),
    deleteTag: index => dispatch(actions.deleteTag(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
