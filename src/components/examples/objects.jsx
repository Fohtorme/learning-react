import React, { Component } from "react";

class ObjectsExample extends Component {
  state = {};

  example = () => {
    console.log(this.exampleCode);
    this.exampleCode();
  };

  exampleCode = () => {
    const object = {
      variable: "value",
      method() {
        return "return";
      }
    };

    console.log("object.variable:", object.variable);
    console.log("object['variable']:", object["variable"]);
    console.log("object.method:", object.method);
    console.log("object['method']:", object["method"]);
    console.log("object.method():", object.method());
    console.log("object['method']():", object["method"]());
  };

  render() {
    return (
      <button onClick={this.example}>Click and see the console log</button>
    );
  }
}

export default ObjectsExample;
