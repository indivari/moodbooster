import React from "react";
import { QuotesContext } from "../../QuotesContext";
import { QuoteLineItem } from "./QuoteLineItem";

import styled from "styled-components";

const Vertical = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const QuotesPanel = () => {
  const { quotesList } = React.useContext(QuotesContext);

  return (
    <Vertical>
      {quotesList !== undefined ? (
        quotesList.map((val, id) => {
          return <QuoteLineItem key={id} quote={val} />;
        })
      ) : (
        <>loading</>
      )}
    </Vertical>
  );
};
