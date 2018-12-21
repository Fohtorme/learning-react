import React, { Component } from "react";

class ArrayMapExample extends Component {
  state = {};
  render() {
    const items = ["1", "2", "3", "4", "5"];
    return items.map(item => `item ${item}, `);
  }
}

export default ArrayMapExample;
