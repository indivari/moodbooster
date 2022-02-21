import React from "react";

import styled from "styled-components";
import { ImgProfilePhoto } from "../Nav/UserProfile";
import { FiThumbsUp } from "react-icons/fi";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { QuotesContext } from "../../QuotesContext";

const CardContainer = styled.div`
  position: relative;
  padding: 10px;
  padding-bottom: 60px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 2px 8px #ddd;
`;

const QuoteContent = styled.div`
  color: #333;
  line-height: 1.6em;
  margin-left: 10px;
  &::before {
    content: "“";
    font-size: 36px;
    font-family: serif;
    color: #555;
  }
  &::after {
    content: "”";
    font-size: 36px;
    font-family: serif;
    color: #555;
  }
`;

const ProfileContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const ProfilePhoto = ({ url }) => {
  if (!url) return null;
  return <ImgProfilePhoto src={url} />;
};

const VoteContainer = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const VoteCount = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #ccd;
  padding: 2px 8px;
  border-radius: 10px;
`;

export const VotingButtons = ({ quote }) => {
  const { _id: quoteId, votes } = quote;
  const { user, isLoggedIn } = React.useContext(UserContext);
  const { refreshQuotes } = React.useContext(QuotesContext);

  const makeVote = (vote) => {
    if (!isLoggedIn) return;

    axios
      .post(`http://localhost:8080/quotes/${quoteId}/vote`, {
        userId: user.userId,
        vote,
      })
      .then(() => {
        refreshQuotes();
      });
  };

  return (
    <VoteContainer>
      <FiThumbsUp
        style={{
          cursor: isLoggedIn ? "pointer" : "default",
          color: isLoggedIn ? "#daa" : "grey",
        }}
        onClick={() => makeVote(true)}
      />{" "}
      <VoteCount>{votes.length}</VoteCount>
    </VoteContainer>
  );
};

export const QuoteCardItem = ({ quote }) => {
  return (
    <CardContainer>
      <QuoteContent>{quote.content}</QuoteContent>
      <ProfileContainer>
        <ProfilePhoto url={quote.user.profilePhoto} />
      </ProfileContainer>
      <VotingButtons quote={quote} />
    </CardContainer>
  );
};
