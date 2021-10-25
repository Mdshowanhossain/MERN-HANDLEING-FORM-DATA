import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="register_container">
        <div className="register_box">
          <label htmlFor="">Email</label>
          <input placeholder="Email" type="text" name="email" />

          <label htmlFor="">Password</label>
          <input placeholder="Password" type="text" name="" />

          <div className="submit_area">
            <Link className="Link" to="/signup">
              Go to sign up Page
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

export default Login;
