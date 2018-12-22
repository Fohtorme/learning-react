import React, { Component } from "react";
import ClickAndSeeLog from "../general/btnClickAndSeeLog";

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
    return <ClickAndSeeLog onClick={this.example} />;
  }
}

export default ObjectsExample;
