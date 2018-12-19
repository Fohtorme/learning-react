import React, { Component } from "react";
import ExampleHeader from "./exampleHeader";
import HelloWorld from "./examples/helloWorld";
import LetVarConst from "./examples/letVarConst";
import ObjectsExample from "./examples/objects";
import ThisKeyword from "./examples/thisKeyword";

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
        <div>
          <ExampleHeader title="Example 3 - Objects" />
          <ObjectsExample />
        </div>
        <div>
          <ExampleHeader title="Example 4 - This keyword" />
          <ThisKeyword />
        </div>
      </React.Fragment>
    );
  }
}

export default Examples;
