import React, { Component } from "react";

class ArrowFunctionAndThis extends Component {
  state = {};

  example = () => {
    console.log(this.exampleCode);
    this.exampleCode();
  };

  exampleCode = () => {
    // "this" points to the window
    setTimeout(function() {
      console.log(this);
    }, 0);
    // "this" points to the classe (don't rebind the this)
    setTimeout(() => {
      console.log(this);
    }, 0);
  };

  render() {
    return (
      <button onClick={this.example}>Click and see the console log</button>
    );
  }
}

export default ArrowFunctionAndThis;
