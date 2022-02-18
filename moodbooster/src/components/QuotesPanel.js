import React from "react";
import "../css/QuotesPanel.css";

export const QuotesPanel = () => {
  return (
    <div className="quotes-panel-div">
      <textarea
        name=""
        id="quote-input"
        cols="30"
        rows="10"
        autofocus
      ></textarea>
    </div>
  );
};
