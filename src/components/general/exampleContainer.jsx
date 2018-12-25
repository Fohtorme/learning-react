import React from "react";

const ExampleContainer = ({ title, children }) => {
  const divStyle = {
    color: "red",
    fontSize: 20
  };
  return (
    <div>
      <div style={divStyle}>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default ExampleContainer;
