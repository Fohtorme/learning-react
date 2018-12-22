import React, { Component } from "react";
import ClickAndSeeLog from "../general/btnClickAndSeeLog";

class LetVarConst extends Component {
  state = {};

  example = () => {
    console.log(this.exampleCode);
    this.exampleCode();
  };

  exampleCode = () => {
    // A "let" it's visible just inside a block
    for (let i = 0; i < 5; i++) {
      console.log("i", i);
    }
    // console.log("i", i);

    // A "var" it's visible inside the whole function
    for (var j = 0; j < 5; j++) {
      console.log("j", j);
    }
    console.log("j", j);

    // A "const" it's visible just inside a block
    for (let k = 0; k < 1; k++) {
      const m = 0;
      console.log("m", m);
    }
    // console.log("m", m);

    // ... and a "const" also it's not a variable, because it's read-only
    // for (const k = 0; k < 5; k++) {
    //   console.log("k", k);
    // }
    // console.log("k", k);
  };

  render() {
    return <ClickAndSeeLog onClick={this.example} />;
  }
}

export default LetVarConst;
