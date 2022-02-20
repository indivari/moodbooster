import React from "react";

import styled from "styled-components";
import { ImgProfilePhoto } from "../Nav/UserProfile";
import { FiThumbsUp } from "react-icons/fi";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { QuotesContext } from "../../QuotesContext";

const HorizontalRow = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: #eff;
  border-radius: 5px;
  padding: 5px 8px;
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
  color: #333;
  line-height: 1.6em;
`;

export const ProfilePhoto = ({ url }) => {
  if (!url) return null;
  return <ImgProfilePhoto src={url} />;
};

const VotingRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  box-sizing: border-box;
  color: #333;
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
    <VotingRow>
      <FiThumbsUp
        style={{
          cursor: isLoggedIn ? "pointer" : "default",
          color: isLoggedIn ? "#daa" : "grey",
        }}
        onClick={() => makeVote(true)}
      />{" "}
      <VoteCount>{votes.length}</VoteCount>
    </VotingRow>
  );
};

export const QuoteLineItem = ({ quote }) => {
  return (
    <HorizontalRow>
      <ProfilePhoto url={quote.user.profilePhoto} />
      <Vertical>
        <QuoteContent>{quote.content}</QuoteContent>
        <VotingButtons quote={quote} />
      </Vertical>
    </HorizontalRow>
  );
};
