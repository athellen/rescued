import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="">
        <a className="navbar-brand">
          <img src="#" alt="" />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Profile" className="nav-link">
              Profile
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={() => props.history.push("/login")}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
