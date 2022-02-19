import React from "react";

import styled from "styled-components";
import { ImgProfilePhoto } from "../Nav/UserProfile";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import axios from "axios";
import { UserContext } from "../../UserContext";

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

export const VotingButtons = ({ quoteId }) => {
  const { user } = React.useContext(UserContext);
  const { userId } = user;

  const makeVote = (vote) => {
    axios
      .post(`http://localhost:8080/quotes/${quoteId}/vote`, {
        userId,
        vote,
      })
      .then(() => {});
  };

  return (
    <HorizontalRow width="50px" color="#555">
      <FiThumbsUp onClick={() => makeVote(true)} />
      <FiThumbsDown onClick={() => makeVote(false)} />
    </HorizontalRow>
  );
};

export const QuoteLineItem = ({ quote }) => {
  return (
    <HorizontalRow>
      <ProfilePhoto url={quote.user.profilePhoto} />
      <Vertical>
        <QuoteContent>{quote.content}</QuoteContent>
        <VotingButtons quoteId={quote._id} />
      </Vertical>
    </HorizontalRow>
  );
};
