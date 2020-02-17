import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="https://img.icons8.com/plasticine/2x/list.png"
          width="50"
          alt="list-icon"
        ></img>
        Attendance Sheet
      </a>
      <ul className="nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/students" className="nav-link">
            Students
          </a>
        </li>
        <li className="nav-item">
          <a href="/classes" className="nav-link">
            Classes
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
