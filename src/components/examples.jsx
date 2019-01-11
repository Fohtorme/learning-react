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
import Router from "./general/router";

class Examples extends Component {
  state = {};

  getLinks() {
    const showExample = function(code, name, Component) {
      return (
        <ExampleContainer title={`*** Example ${code} - ${name}`}>
          <Component />
        </ExampleContainer>
      );
    };
    let c = 0;
    return [
      {
        path: "/HelloWorld",
        label: "HelloWorld",
        component: showExample(++c, "Hello World", HelloWorld)
      },
      {
        path: "/LetVarConst",
        label: "LetVarConst",
        component: showExample(++c, "Let vs Var vs Const", LetVarConst)
      },
      {
        path: "/ObjectsExample",
        label: "ObjectsExample",
        component: showExample(++c, "Objects", ObjectsExample)
      },
      {
        path: "/ThisKeyword",
        label: "ThisKeyword",
        component: showExample(++c, "This Keyword", ThisKeyword)
      },
      {
        path: "/ArrowFunction",
        label: "ArrowFunction",
        component: showExample(++c, "Arrow Function", ArrowFunction)
      },
      {
        path: "/ArrowFunctionAndThis",
        label: "ArrowFunctionAndThis",
        component: showExample(
          ++c,
          "Arrow Function and this",
          ArrowFunctionAndThis
        )
      },
      {
        path: "/ArrayMapExample",
        label: "ArrayMapExample",
        component: showExample(++c, "ArrayMap", ArrayMapExample)
      },
      {
        path: "/ObjectDesctructuringExample",
        label: "ObjectDesctructuringExample",
        component: showExample(
          ++c,
          "Object destructuring",
          ObjectDesctructuringExample
        )
      },
      {
        path: "/SpreadOperatorExample",
        label: "SpreadOperatorExample",
        component: showExample(++c, "Spread operator", SpreadOperatorExample)
      },
      {
        path: "/ClassesExample",
        label: "ClassesExample",
        component: showExample(++c, "Classes and modules", ClassesExample)
      },
      {
        path: "/DynamicItemList",
        label: "DynamicItemList",
        component: showExample(++c, "Dynamic Item List", DynamicItemList)
      },
      {
        path: "/PluralModifier",
        label: "PluralModifier",
        component: showExample(++c, "Plural modifier", pluralModifierReact())
      },
      {
        path: "/LifecycleHooks",
        label: "LifecycleHooks",
        component: showExample(++c, "Lifecycle hooks", LifecycleHooks)
      },
      {
        path: "/BestGames",
        label: "BestGames",
        component: showExample(++c, "Best games", BestGames)
      }
    ];
  }

  render() {
    const mainLink = {
      path: "/",
      label: "LEARNING REACT",
      component: null
    };
    return <Router mainLink={mainLink} links={this.getLinks()} />;
  }
}

export default Examples;
