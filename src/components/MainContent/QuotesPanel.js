import React, { useEffect } from "react";
import { QuotesContext } from "../../QuotesContext";
import { QuoteCardItem } from "./QuoteCardItem";

import styled from "styled-components";

const Vertical = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  @media only screen and (min-width: 1100px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const QuotesPanel = () => {
  const { quotesList } = React.useContext(QuotesContext);
  const { refreshQuotes } = React.useContext(QuotesContext);

  useEffect(() => {
    refreshQuotes();
  }, [refreshQuotes]);

  return (
    <Vertical>
      {quotesList !== undefined ? (
        quotesList.map((val, id) => {
          return <QuoteCardItem key={id} quote={val} />;
        })
      ) : (
        <>loading</>
      )}
    </Vertical>
  );
};
