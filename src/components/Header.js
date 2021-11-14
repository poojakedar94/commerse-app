import React from "react";
import Icon from "./Icon";
import Navbar from "./Navbar";
import "./header.scss";
import DesktopSearchBar from "./DesktopSearchBar";
import Right from "./Right";
function Header() {
  return (
    <div className="header-container">
      <div className="icon-wrapper">
        <Icon />
      </div>
      <Navbar />
      <DesktopSearchBar />
      <Right />
    </div>
  );
}
export default Header;
