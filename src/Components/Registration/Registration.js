import React from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
const Registration = () => {
  return (
    <>
      <div className="register_container">
        <div className="register_box">
          <label htmlFor="">First Name</label>
          <input placeholder="Name" type="text" name="name" />

          <label htmlFor="">Email</label>
          <input placeholder="Email" type="text" name="email" />
          <label htmlFor="">Mobile Number</label>
          <input placeholder="Mobile Number" type="text" name="" />
          <label htmlFor="">Profession</label>
          <input placeholder="Profession" type="text" name="" />
          <label htmlFor="">Password</label>
          <input placeholder="Password" type="text" name="" />
          <label htmlFor="">Confirm Password</label>
          <input placeholder="Confirm Password" type="text" name="" />
          <label htmlFor="">First Name</label>
          <input placeholder="First Name" type="text" name="" />

          <div className="submit_area">
            <Link className="Link" to="/singin">
              Go to sign in Page
            </Link>
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
