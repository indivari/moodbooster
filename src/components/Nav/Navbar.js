import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";
import { Button } from "../Button";
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo";

const Nav = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar = ({ onLogin }) => {
  const isLoginClicked = false;
  const { user } = useContext(UserContext);

  const handleLoginClick = () => {
    onLogin(!isLoginClicked);
  };

  const handleLogout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  return (
    <Nav>
      <Logo />

      <UserProfileWrapper>
        {user ? (
          <UserProfile user={user} />
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}

        <Button onClick={handleLogout}>Logout</Button>
      </UserProfileWrapper>
    </Nav>
  );
};
