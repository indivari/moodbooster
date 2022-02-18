import "../css/LoginForm.css";
import { useState } from "react";
import axios from "axios";

export const LoginForm = ({ onLoginClick }) => {
  const handleLoginClick = () => {
    axios.get("http://localhost:8080/auth/facebook").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="login-container">
      <a
        href="http://localhost:8080/auth/facebook"
        className="login-form-login-btn"
      >
        Login with Facebook
      </a>
    </div>
  );
};
