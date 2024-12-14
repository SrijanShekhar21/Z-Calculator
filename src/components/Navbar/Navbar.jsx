import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-heading">Z Calculator</div>
      <div className="navbar-links">
        <Link to="/calculator">Calculator</Link>
        <Link to="/data">Data</Link>
      </div>
    </div>
  );
}

export default Navbar;
