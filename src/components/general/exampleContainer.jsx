import React, { Component } from "react";

class ExampleContainer extends Component {
  state = {};

  render() {
    const divStyle = {
      color: "red",
      fontSize: 20
    };
    return (
      <div>
        <div style={divStyle}>{this.props.title}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default ExampleContainer;
