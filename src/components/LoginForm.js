import "../css/LoginForm.css";

export const LoginForm = ({ onLoginClick }) => {
  return (
    <div className="login-container">
      <a
        href="http://localhost:8080/auth/facebook"
        className="login-form-facebook-btn"
      >
        Login with Facebook
      </a>

      <a
        href="http://localhost:8080/auth/github"
        className="login-form-github-btn"
      >
        Login with Github
      </a>
    </div>
  );
};
