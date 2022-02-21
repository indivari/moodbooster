import React from "react";
import { useEffect } from "react";

import { SectionHeader } from "./SectionHeader";

import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 220px;
  padding: 20px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const FeaturePanel = () => {
  useEffect(() => {
    console.log("loaded");
    axios.get("http://localhost:8080/quotes/list").then((res) => {
      console.log("quotes response", res.data);
      // setQuotesList(res.data);
    });
  }, []);

  return <Container></Container>;
};
