import { Component } from "react";
import Programmer from "../classes/programmer";

class ClassesExample extends Component {
  state = {};
  render() {
    const myself = new Programmer("Jonas");
    return `${myself.name}  is  ${myself.program()}!`;
  }
}

export default ClassesExample;
