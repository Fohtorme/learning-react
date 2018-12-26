import React, { Component } from "react";
import ExampleContainer from "./general/exampleContainer";
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
import DynamicItemList from "./examples/dynamicList";
import { pluralModifierReact } from "./examples/pluralModifier";
import LifecycleHooks from "./examples/lifecycleHooks";
import BestGames from "./examples/bestGames";

class Examples extends Component {
  state = {};
  render() {
    const showExample = function(code, name, Component) {
      return (
        <ExampleContainer title={`*** Example ${code} - ${name}`}>
          <Component />
        </ExampleContainer>
      );
    };
    let c = 0;
    return (
      <React.Fragment>
        {showExample(++c, "Hello World", HelloWorld)}
        {showExample(++c, "Let vs Var vs Const", LetVarConst)}
        {showExample(++c, "Objects", ObjectsExample)}
        {showExample(++c, "This Keyword", ThisKeyword)}
        {showExample(++c, "Arrow Function", ArrowFunction)}
        {showExample(++c, "Arrow Function and this", ArrowFunctionAndThis)}
        {showExample(++c, "ArrayMap", ArrayMapExample)}
        {showExample(++c, "Object destructuring", ObjectDesctructuringExample)}
        {showExample(++c, "Spread operator", SpreadOperatorExample)}
        {showExample(++c, "Classes and modules", ClassesExample)}
        {showExample(++c, "Dynamic Item List", DynamicItemList)}
        {showExample(++c, "Plural modifier", pluralModifierReact())}
        {showExample(++c, "Lifecycle hooks", LifecycleHooks)}
        {showExample(++c, "Best games", BestGames)}
      </React.Fragment>
    );
  }
}

export default Examples;
