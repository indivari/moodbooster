import axios from "axios";
import React, { useState } from "react";

import { UserContext } from "../../UserContext";

import styled from "styled-components";
import { ImgProfilePhoto } from "../Nav/UserProfile";
import { Button } from "./../Button";
import { QuotesContext } from "../../QuotesContext";

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: #eee;
  border: 0;
  border-radius: 10px;
  padding: 20px;
  font-family: sans;
  font-size: 16px;
`;

const HorizontalRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 20px 0;
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
  const { user, isLoggedIn } = React.useContext(UserContext);
  const { refreshQuotes } = React.useContext(QuotesContext);
  const quotePlaceholder = React.useMemo(
    () =>
      isLoggedIn
        ? "Start typing your mood booster quote here. Use #hashtags to tag them"
        : "Please log in to share your quote",
    [isLoggedIn]
  );
  const ref = React.useRef(null);

  const handleOnChange = (e) => {
    setQuote(e.target.value);
    console.log(quote);
  };

  const clearForm = () => {
    if (ref.current) {
      ref.current.value = "";
    }
  };

  const handleClickBoost = () => {
    axios
      .post("http://localhost:8080/quotes/add", {
        content: quote,
        userId: user.userId,
      })
      .then(() => {
        refreshQuotes();
        clearForm();
      });
  };

  return (
    <HorizontalRow>
      <ProfilePhoto />
      <Vertical>
        <Textarea
          ref={ref}
          onChange={handleOnChange}
          name=""
          id="quote-input"
          placeholder={quotePlaceholder}
          autoFocus
        ></Textarea>
        {isLoggedIn ? (
          <ShrinkedButton onClick={handleClickBoost}>Boost</ShrinkedButton>
        ) : null}
      </Vertical>
    </HorizontalRow>
  );
};
