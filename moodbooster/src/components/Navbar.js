import React from "react";
import "../css/Navbar.css";
import { IoIosAdd } from "react-icons/io";

export const Navbar = () => {
  const handleLoginClick = () => {};

  return (
    <div className="navbar-container">
      <h2>Moodbooster</h2>

      <span className="button-container">
        <span>
          <button className="login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </span>
        <span>
          <button className="logout-btn">Logout</button>
        </span>
      </span>
    </div>
  );
};
