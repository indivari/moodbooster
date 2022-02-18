import React from "react";
import "../css/Navbar.css";
import { IoIosAdd } from "react-icons/io";
import axios from "axios";
import { useState } from "react";

export const Navbar = ({ onLogin }) => {
  const isLoginClicked = false;

  const handleLoginClick = () => {
    onLogin(!isLoginClicked);
  };

  //   const handleLoginClick = () => {
  //     axios.get("./auth/facebook").then((res) => {
  //       console.log(res);
  //     });
  //   };

  return (
    <div className="navbar-container">
      <h2>Moodbooster</h2>

      <span className="button-container">
        <span>
          <button className="navbar-login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </span>
        <span>
          <button className="navbar-logout-btn">Logout</button>
        </span>
      </span>
    </div>
  );
};
