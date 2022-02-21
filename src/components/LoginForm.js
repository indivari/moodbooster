import { BsFacebook, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin: 80px 0 100px 0;
  > li {
    width: 300px;
  }
`;

const LoginLink = styled.a`
  display: block;
  width: 100%;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "transparent"};
  text-decoration: none !important;
  color: white;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    color: white;
  }
  > span {
    margin-right: 10px;
  }
`;

export const LoginForm = ({ onLoginClick }) => {
  return (
    <Container>
      <li>
        <LoginLink
          href="http://localhost:8080/auth/facebook"
          bgcolor="deepskyblue"
        >
          <span id="facebook-icon">
            <BsFacebook />
          </span>
          Login with Facebook
        </LoginLink>
      </li>
      <li>
        <LoginLink
          href="http://localhost:8080/auth/github"
          bgcolor="rgb(3, 3, 3)"
        >
          <span id="github-icon">
            <BsGithub />
          </span>
          Login with Github
        </LoginLink>
      </li>
    </Container>
  );
};
