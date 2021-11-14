import React from "react";
import { Link } from "react-router-dom";
function Icon() {
  return (
    <div>
      <Link to="/" className="nav-link">
        <img
          src="https://images.indianexpress.com/2021/01/myntra.png"
          className="icon"
        />
      </Link>
    </div>
  );
}
export default Icon;
