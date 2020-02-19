import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#ffffff", backgroundColor: "#52bea0" };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="#">
        <img
          src="https://img.icons8.com/plasticine/2x/list.png"
          width="50"
          alt="list-icon"
        ></img>
        Attendance Sheet
      </NavLink>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" activeStyle={activeStyle} exact className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/students"
            activeStyle={activeStyle}
            className="nav-link"
          >
            Students
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/classes" activeStyle={activeStyle} className="nav-link">
            Classes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
