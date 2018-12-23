import React, { Component } from "react";

var util = require("util");

class PluralModifier extends Component {
  state = {};

  formatText(verb, number, pluralModifier) {
    return util.format(
      "There %s %s %s%s",
      verb,
      number,
      this.props.candidate,
      pluralModifier
    );
  }

  render() {
    if (this.props.count === "0") {
      return this.formatText("are", "no", "s");
    } else if (this.props.count === "1") {
      return this.formatText("is", "one", "");
    } else {
      return this.formatText("are", this.props.count, "s");
    }
  }
}

// It probably isn't the best way to do it, it's just to demonstrate another way to do
export function pluralModifierReact() {
  class Teste extends Component {
    state = {};
    render() {
      return (
        <React.Fragment>
          <PluralModifier candidate="cow" count="0" />
          <br />
          <PluralModifier candidate="cow" count="1" />
          <br />
          <PluralModifier candidate="cow" count="4" />
          <br />
        </React.Fragment>
      );
    }
  }
  return Teste;
}
