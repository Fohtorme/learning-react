import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Routing from "./routing";

const Router = ({ mainLink, links }) => {
  return (
    <BrowserRouter>
      <div>
        <Navbar mainLink={mainLink} links={links} />
        <Routing mainLink={mainLink} links={links} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
