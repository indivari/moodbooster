import React, { useState } from "react";
import "../css/QuotesPanel.css";
import axios from "axios";
import { UserContext } from "../UserContext";

export const QuotesPanel = () => {
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
    <div className="quotes-panel-div">
      <div className="quote-wrapper">
        <textarea
          onChange={handleOnChange}
          name=""
          id="quote-input"
          placeholder="start typing a moodbooster...."
          autofocus
        ></textarea>
        <button class="boost-btn" onClick={handleClickBoost}>
          Boost
        </button>
      </div>
    </div>
  );
};
