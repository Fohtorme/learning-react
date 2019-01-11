import React, { Component } from "react";
import { Route } from "react-router-dom";

const Routing = ({ mainLink, links }) => {
  return (
    <React.Fragment>
      <Route exact path={mainLink.path} render={() => mainLink.component} />
      {links.map(link => (
        <Route key={link.path} path={link.path} render={() => link.component} />
      ))}
    </React.Fragment>
  );
};

export default Routing;
