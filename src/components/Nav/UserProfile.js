import styled from "styled-components";

export const ImgProfilePhoto = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

export const UserProfile = ({ user }) => {
  return <ImgProfilePhoto src={user.profilePhoto} alt={user.name} />;
};
