import styled from "styled-components";

const StyledLogo = styled.div`
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  font-weight: bold;
`;

export const Logo = () => {
  return <StyledLogo>Moodbooster</StyledLogo>;
};
