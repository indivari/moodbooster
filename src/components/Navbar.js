import React from "react";
import "../css/Navbar.css";
import { IoIosAdd } from "react-icons/io";

import { useState } from "react";

export const Navbar = ({ onLogin }) => {
  const isLoginClicked = false;

  const handleLoginClick = () => {
    onLogin(!isLoginClicked);
  };

  const handleLogout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };
  //   const handleLoginClick = () => {

  //
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
          <button onClick={handleLogout} className="navbar-logout-btn">
            Logout
          </button>
        </span>
      </span>
    </div>
  );
};
