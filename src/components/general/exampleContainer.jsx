import React, { Component } from "react";

const ExampleContainer = props => {
  const divStyle = {
    color: "red",
    fontSize: 20
  };
  return (
    <div>
      <div style={divStyle}>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default ExampleContainer;
