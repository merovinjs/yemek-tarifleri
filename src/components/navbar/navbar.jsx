import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Yemek Tarifleri
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create">
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
