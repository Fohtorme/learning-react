import React, { Component } from "react";

class ExampleHeader extends Component {
  state = {};

  render() {
    const divStyle = {
      color: "red"
    };
    return <div style={divStyle}>{this.props.title}</div>;
  }
}

export default ExampleHeader;
