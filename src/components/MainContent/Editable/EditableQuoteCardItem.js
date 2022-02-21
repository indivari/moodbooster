import React, { useEffect } from "react";

import styled from "styled-components";
import { ImgProfilePhoto } from "../../Nav/UserProfile";
import { QuotesContext } from "../../../QuotesContext";
import { AiOutlineEdit, AiOutlineSave, AiOutlineDelete } from "react-icons/ai";

const CardContainer = styled.div`
  position: relative;
  padding: 10px;
  padding-bottom: 60px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 2px 8px #ddd;
`;

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

const ToolPanel = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const IconButton = styled.button`
  margin: 5px;
  cursor: pointer;
  border: 0;
  &:hover {
    background-color: lightgray;
  }
`;

export const ProfilePhoto = ({ url }) => {
  if (!url) return null;
  return <ImgProfilePhoto src={url} />;
};

export const EditableQuoteCardItem = ({ quote }) => {
  const [isOnEdit, setIsOnEdit] = React.useState(false);
  const [text, setText] = React.useState("");
  const { saveQuote, deleteQuote } = React.useContext(QuotesContext);

  const saveQuoteClick = () => {
    saveQuote(quote, text);
    setIsOnEdit(false);
  };

  const deleteQuoteClick = () => {
    deleteQuote(quote);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log(quote);
  };

  useEffect(() => setText(quote.content), [quote]);

  return (
    <CardContainer>
      {isOnEdit ? (
        <Textarea onChange={handleOnChange}>{text}</Textarea>
      ) : (
        <QuoteContent>{quote.content}</QuoteContent>
      )}
      <ToolPanel>
        {isOnEdit ? (
          <IconButton onClick={() => saveQuoteClick()}>
            <AiOutlineSave />
          </IconButton>
        ) : (
          <>
            <IconButton onClick={() => setIsOnEdit(true)}>
              <AiOutlineEdit />
            </IconButton>
            <IconButton onClick={() => deleteQuoteClick()}>
              <AiOutlineDelete />
            </IconButton>
          </>
        )}
      </ToolPanel>
    </CardContainer>
  );
};
