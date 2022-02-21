import "../css/LoginForm.css";
import { BsFacebook, BsGithub } from "react-icons/bs";

export const LoginForm = ({ onLoginClick }) => {
  return (
    <div className="login-container">
      <a
        href="http://localhost:8080/auth/facebook"
        className="login-form-facebook-btn"
      >
        <span id="facebook-icon">
          <BsFacebook />
        </span>
        Login with Facebook
      </a>

      <a
        href="http://localhost:8080/auth/github"
        className="login-form-github-btn"
      >
        <span id="github-icon">
          <BsGithub />
        </span>
        Login with Github
      </a>
    </div>
  );
};
