import React, { Component } from "react";
import ExampleHeader from "./general/exampleHeader";
import HelloWorld from "./examples/helloWorld";
import LetVarConst from "./examples/letVarConst";
import ObjectsExample from "./examples/objects";
import ThisKeyword from "./examples/thisKeyword";
import ArrowFunction from "./examples/arrowFunction";
import ArrowFunctionAndThis from "./examples/arrowFunctionAndThis";
import ArrayMapExample from "./examples/arrayMap";
import ObjectDesctructuringExample from "./examples/objectDestructuring";
import SpreadOperatorExample from "./examples/spreadOperator";
import ClassesExample from "./examples/classesExample";

class Examples extends Component {
  state = {};
  render() {
    const showExample = function(code, name, Component) {
      return (
        <div>
          <ExampleHeader title={`Example ${code} - ${name}`} />
          <Component />
        </div>
      );
    };
    return (
      <React.Fragment>
        {showExample(1, "Hello World", HelloWorld)}
        {showExample(2, "Let vs Var vs Const", LetVarConst)}
        {showExample(3, "Objects", ObjectsExample)}
        {showExample(4, "This Keyword", ThisKeyword)}
        {showExample(5, "Arrow Function", ArrowFunction)}
        {showExample(6, "Arrow Function and this", ArrowFunctionAndThis)}
        {showExample(7, "ArrayMap", ArrayMapExample)}
        {showExample(8, "Object destructuring", ObjectDesctructuringExample)}
        {showExample(9, "Spread operator", SpreadOperatorExample)}
        {showExample(10, "Classes and modules", ClassesExample)}
      </React.Fragment>
    );
  }
}

export default Examples;
