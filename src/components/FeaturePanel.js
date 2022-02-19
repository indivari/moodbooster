import React from "react";
import "../css/FeaturePanel.css";
import { useEffect } from "react";
import axios from "axios";

export const FeaturePanel = () => {
  useEffect(() => {
    console.log("loaded");
    axios.get("http://localhost:8080/quotes/list").then((res) => {
      console.log("quotes response", res.data);
      // setQuotesList(res.data);
    });
  }, []);

  return (
    <>
      <div className="feature-panel-div">
        <h2>Top Boosterers</h2>
      </div>
    </>
  );
};
