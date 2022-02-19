import styled from "styled-components";
import { ImgProfilePhoto } from "../Nav/UserProfile";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const HorizontalRow = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: #eff;
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 12px;
  box-sizing: border-box;
`;

const Vertical = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const QuoteContent = styled.div`
  width: 100%;
`;

export const ProfilePhoto = ({ url }) => {
  if (!url) return null;
  return <ImgProfilePhoto src={url} />;
};

export const VotingButtons = () => {
  return (
    <HorizontalRow width="50px" color="#555">
      <FiThumbsUp />
      <FiThumbsDown />
    </HorizontalRow>
  );
};

export const QuoteLineItem = ({ quote }) => {
  return (
    <HorizontalRow>
      <ProfilePhoto url={quote.user.profilePhoto} />
      <Vertical>
        <QuoteContent>{quote.content}</QuoteContent>
        <VotingButtons />
      </Vertical>
    </HorizontalRow>
  );
};
