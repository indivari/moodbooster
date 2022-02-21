import React from "react";
import { QuotesContext } from "../../../QuotesContext";
import { EditableQuoteCardItem } from "./EditableQuoteCardItem";

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

export const EditableQuotesPanel = () => {
  const { quotesList } = React.useContext(QuotesContext);

  return (
    <Vertical>
      {quotesList !== undefined ? (
        quotesList.map((val, id) => {
          return <EditableQuoteCardItem key={id} quote={val} />;
        })
      ) : (
        <>loading</>
      )}
    </Vertical>
  );
};
