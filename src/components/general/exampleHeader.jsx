import React, { Component } from "react";

class ExampleHeader extends Component {
  state = {};

  render() {
    const divStyle = {
      color: "red",
      fontSize: 20
    };
    return <div style={divStyle}>{this.props.title}</div>;
  }
}

export default ExampleHeader;
