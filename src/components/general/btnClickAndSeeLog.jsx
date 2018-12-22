import React, { Component } from "react";

class ClickAndSeeLog extends Component {
  state = {};
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.props.onClick}
      >
        Click and see the console log
      </button>
    );
  }
}

export default ClickAndSeeLog;
