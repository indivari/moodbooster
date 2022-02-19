import axios from "axios";
import React, { useState } from "react";

import { UserContext } from "../../UserContext";

import styled from "styled-components";
import { ImgProfilePhoto } from "../Nav/UserProfile";
import { Button } from "./../Button";

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: #eee;
  border: 0;
  border-radius: 10px;
  padding: 10px;
`;

const HorizontalRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Vertical = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;

const ShrinkedButton = styled(Button)`
  width: 100px;
`;

export const ProfilePhoto = () => {
  const { user } = React.useContext(UserContext);
  if (!user) return null;
  return <ImgProfilePhoto src={user.profilePhoto} />;
};

export const QuoteEntryForm = () => {
  const [quote, setQuote] = useState("");
  const userContext = React.useContext(UserContext);

  const handleOnChange = (e) => {
    setQuote(e.target.value);
    console.log(quote);
  };

  const handleClickBoost = () => {
    axios.post("http://localhost:8080/quotes/add", {
      content: quote,
      userId: userContext.userId,
    });
  };

  return (
    <HorizontalRow>
      <ProfilePhoto />
      <Vertical>
        <Textarea
          onChange={handleOnChange}
          name=""
          id="quote-input"
          placeholder="start typing a moodbooster...."
          autofocus
        ></Textarea>
        <ShrinkedButton onClick={handleClickBoost}>Boost</ShrinkedButton>
      </Vertical>
    </HorizontalRow>
  );
};
