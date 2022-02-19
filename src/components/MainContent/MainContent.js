import React from "react";
import { QuotesPanel } from "./QuotesPanel";
import { QuoteEntryForm } from "./QuoteEntryForm";

import styled from "styled-components";

const QuotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 50px;
  border-radius: 10px;
  padding: 20px;
`;

export const MainContent = () => {
  return (
    <QuotesWrapper>
      <QuoteEntryForm />
      <QuotesPanel />
    </QuotesWrapper>
  );
};
