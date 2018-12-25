import React, { Component } from "react";

var util = require("util");

class PluralModifier extends Component {
  state = {};

  formatText(verb, number, pluralModifier) {
    const { candidate } = this.props;
    return util.format(
      "There %s %s %s%s",
      verb,
      number,
      candidate,
      pluralModifier
    );
  }

  render() {
    const { count } = this.props;
    if (count === "0") {
      return this.formatText("are", "no", "s");
    } else if (count === "1") {
      return this.formatText("is", "one", "");
    } else {
      return this.formatText("are", count, "s");
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
