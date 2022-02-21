import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";
import { Button } from "../Button";
import { ProfileDropdown } from "./UserProfile";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

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

export const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <Nav>
      <Logo />

      <UserProfileWrapper>
        {user ? (
          <ProfileDropdown user={user} />
        ) : (
          <Button>
            <Link to="/login" style={{ color: "white", fontWeight: "bold" }}>
              Login
            </Link>
          </Button>
        )}
      </UserProfileWrapper>
    </Nav>
  );
};
