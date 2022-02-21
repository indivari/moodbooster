import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuotesPanel } from "./QuotesPanel";
import { QuoteEntryForm } from "./QuoteEntryForm";
import { UserContext } from "../../UserContext";

import axios from "axios";

import styled from "styled-components";

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
  const params = useParams();
  const { user } = React.useContext(UserContext);

  // useEffect(() => {
  //   console.log("params are", params);
  //   axios
  //     .get(`http://localhost:8080/users/${user.userId}/quotes`)
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, [params]);

  return (
    <QuotesWrapper>
      {/* if userOnBoard then show Dashboard */}
      {/* else show below */}

      <QuoteEntryForm />
      <QuotesPanel />
    </QuotesWrapper>
  );
};
