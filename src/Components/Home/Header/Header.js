import React from "react";
import "./Header.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="image_container">
      {/* <Navbar /> */}
      <div className="header_container">
        <div className="header_title">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
        </div>
        <div className="header_description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, est. Odio exercitationem rem ducimus et architecto,
            ratione ea atque non perspiciatis alias qui quos repellat dicta iste
            culpa asperiores? Reprehenderit.
          </p>
        </div>
        <div className="header_button">
          <button>CLICK HERE</button>
          <button>CLICK HERE</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
