import React from "react";
import { QuotesPanel } from "./QuotesPanel";
import { QuoteEntryForm } from "./QuoteEntryForm";

import styled from "styled-components";

const QuotesWrapper = styled.div`
  display: flex;
  flex-grow: 0;
  flex-basis: 1;
  flex-direction: column;
  background-color: white;
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
