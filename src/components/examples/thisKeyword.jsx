import React, { Component } from "react";

class ThisKeyword extends Component {
  state = {};

  example = () => {
    console.log(this.exampleCode);
    this.exampleCode();
  };

  exampleCode = () => {
    const object = {
      method() {
        return this;
      }
    };

    const anotherObject = {
      anotherMethod() {
        // Return the object
        console.log("object.method():", object.method());
        // Return the window object (global)
        // OBS: In restrict mode it returns undefined for safety
        const exampleFunction1 = object.method;
        console.log(
          "const exampleFunction1 = object.method:",
          exampleFunction1()
        );
        // Return the object
        const exampleFunction2 = object.method.bind(object);
        console.log(
          "const exampleFunction2 = object.method.bind(object):",
          exampleFunction2()
        );
        // Return the another object (it is possible to bind any object)
        const exampleFunction3 = object.method.bind(anotherObject);
        console.log(
          "const exampleFunction3 = object.method.bind(anotherObject):",
          exampleFunction3()
        );
      }
    };

    anotherObject.anotherMethod();
  };

  render() {
    return (
      <button onClick={this.example}>Click and see the console log</button>
    );
  }
}

export default ThisKeyword;
