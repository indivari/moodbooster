import React from "react";
import { QuotesPanel } from "./QuotesPanel";
import { QuoteEntryForm } from "./QuoteEntryForm";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";

import styled from "styled-components";
import { LoginForm } from "../LoginForm";

const QuotesWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 1;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export const MainContent = () => {
  return (
    <QuotesWrapper>
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/tags/:tagId" element={<Quotes />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </QuotesWrapper>
  );
};

const Quotes = () => {
  return (
    <>
      <QuoteEntryForm />
      <QuotesPanel />
    </>
  );
};
