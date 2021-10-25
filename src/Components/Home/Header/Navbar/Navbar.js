import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav_container">
        <div className="nav_left_side">
          <Link to="/">MOHAMMAD SOHAN</Link>
        </div>
        <div className="nav_right_side">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contat</Link>
          <Link to="/singin">Sing in</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
