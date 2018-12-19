import React, { Component } from "react";
import ExampleHeader from "./exampleHeader";
import HelloWorld from "./examples/helloWorld";
import LetVarConst from "./examples/letVarConst";

class Examples extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <ExampleHeader title="Example 1 - Hello World" />
          <HelloWorld />
        </div>
        <div>
          <ExampleHeader title="Example 2 - Let vs Var vs Const" />
          <LetVarConst />
        </div>
      </React.Fragment>
    );
  }
}

export default Examples;
