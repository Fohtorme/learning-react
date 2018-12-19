import React, { Component } from "react";

class ArrowFunction extends Component {
  state = {};

  example = () => {
    console.log(this.exampleCode);
    this.exampleCode();
  };

  exampleCode = () => {
    // Example 1: one parameter, one line, without arrow function
    const square1 = function(number) {
      return number * number;
    };
    // Example 2: one parameter, one line, with arrow function
    const square2 = number => number * number;
    // Example 3: one parameter, multiple line, without arrow function
    const square3 = function(number) {
      var ret = number * number;
      return ret;
    };
    // Example 4: one parameter, multiple line, with arrow function
    const square4 = number => {
      var ret = number * number;
      return ret;
    };
    // Example 5: multiple parameter, multiple line, with arrow function
    const square5 = (number1, number2) => number1 * number2;
    // Example 6: multiple parameter, multiple line, with arrow function
    const square6 = (number1, number2) => {
      var ret = number1 * number2;
      return ret;
    };

    console.log("square1(3):", square1(3));
    console.log("square2(3):", square2(3));
    console.log("square3(3):", square3(3));
    console.log("square4(3):", square4(3));
    console.log("square5(3,3):", square5(3, 3));
    console.log("square6(3,3):", square6(3, 3));
  };

  render() {
    return (
      <button onClick={this.example}>Click and see the console log</button>
    );
  }
}

export default ArrowFunction;
