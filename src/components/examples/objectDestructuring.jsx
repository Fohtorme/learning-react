import { Component } from "react";

class ObjectDesctructuringExample extends Component {
  state = {};
  render() {
    const object = {
      data1: "1",
      data2: "2",
      data3: "3",
      data4: "4"
    };

    const { data1, data2: otherName } = object;
    // data2, data3 and data4 are undefined in this scope
    return data1 + " " + otherName;
  }
}

export default ObjectDesctructuringExample;
