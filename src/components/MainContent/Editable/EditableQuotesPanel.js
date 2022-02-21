import React from "react";
import { QuotesContext } from "../../../QuotesContext";
import { EditableQuoteCardItem } from "./EditableQuoteCardItem";
import { SectionHeader } from "./../../SectionHeader";

import styled from "styled-components";

const Grid = styled.div`
  margin-top: 40px;
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
    <>
      <SectionHeader>Quotes by you</SectionHeader>
      <Grid>
        {quotesList !== undefined ? (
          quotesList.map((val, id) => {
            return <EditableQuoteCardItem key={id} quote={val} />;
          })
        ) : (
          <>loading</>
        )}
      </Grid>
    </>
  );
};
