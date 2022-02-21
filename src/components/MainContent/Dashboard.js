import React, { useEffect } from "react";
import { UserContext } from "../../UserContext";
import styled from "styled-components";
import { QuotesContext } from "../../QuotesContext";
import { EditableQuotesPanel } from "./Editable/EditableQuotesPanel";

const QuotesWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 1;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export const Dashboard = () => {
  const { user } = React.useContext(UserContext);
  const { refreshQuotes } = React.useContext(QuotesContext);

  useEffect(() => {
    if (!user) return;
    refreshQuotes(user.userId);
  }, [user, refreshQuotes]);

  return (
    <QuotesWrapper>
      <EditableQuotesPanel />
    </QuotesWrapper>
  );
};
