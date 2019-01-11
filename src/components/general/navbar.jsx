import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ mainLink, links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to={mainLink.path}>
        {mainLink.label}
      </Link>
      <div className="navbar-nav">
        {links.map(link => (
          <NavLink key={link.path} className="nav-item nav-link" to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
