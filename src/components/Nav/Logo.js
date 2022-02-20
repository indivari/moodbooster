import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";

const StyledLogo = styled.img`
  height: 40px;
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  font-weight: bold;
`;

export const Logo = () => {
  return (
    <Link to="/">
      <StyledLogo src={logo} alt="Logo" />
    </Link>
  );
};
