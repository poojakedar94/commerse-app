import React from "react";
import "./deskTopSearchBar.scss";

function DesktopSearchBar() {
  return (
    <div className="desktop-searchbar">
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
      <input type="text" placeholder="Search for products, brands and more" />
    </div>
  );
}
export default DesktopSearchBar;
