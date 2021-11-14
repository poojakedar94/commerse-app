import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./navbar.scss";
import Right from "./Right";

function Navbar() {
  return (
    <div className="nav-container">
      <Link to="/men" className="nav-link">
        MEN
      </Link>
      <Link to="/women" className="nav-link">
        WOMEN
      </Link>
      <Link to="/kids" className="nav-link">
        KIDS
      </Link>
      <Link to="/home&living" className="nav-link">
        HOME & LIVING
      </Link>
      <Link to="/beauty" className="nav-link">
        BEAUTY
      </Link>
    </div>
  );
}
export default Navbar;
