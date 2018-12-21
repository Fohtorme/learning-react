import React, { Component } from "react";

class SpreadOperatorExample extends Component {
  state = {};
  render() {
    const array1 = [1, 2, 3];
    const array2 = [7, 8, 9];
    return [...array1, 4, 5, 6, ...array2].join(", ");
  }
}

export default SpreadOperatorExample;
