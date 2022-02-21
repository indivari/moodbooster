import "./App.css";

import { Navbar } from "./components/Nav";
import { CategoriesPanel } from "./components/CategoriesPanel";
import { FeaturePanel } from "./components/FeaturePanel";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { QuotesContext } from "./QuotesContext";
import { MainContent } from "./components/MainContent";

import styled from "styled-components";
import { useCallback } from "react";
import { useMemo } from "react";

const Horizontal = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

function App() {
  const [user, setUser] = useState();

  const [quotesList, setQuotesList] = useState([]);
  const isLoggedIn = useMemo(() => !!user, [user]);

  useEffect(() => {
    const getUser = async () => {
      axios
        .get("http://localhost:8080/auth/profile", {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            setUser(res.data.user);
          } else {
            throw new Error("Authentication has been failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const refreshQuotes = useCallback((userId) => {
    if (userId) {
      axios.get(`http://localhost:8080/users/${userId}/quotes`).then((res) => {
        setQuotesList(res.data);
      });
    } else {
      axios.get("http://localhost:8080/quotes/list").then((res) => {
        console.log("quotes response", res.data);
        setQuotesList(res.data);
      });
    }
  }, []);

  const filterQuotesByTag = useCallback((tag) => {
    axios
      .get(`http://localhost:8080/quotes/list`, { params: { tag } })
      .then((res) => {
        setQuotesList(res.data);
      });
  }, []);

  const saveQuote = useCallback(
    (quote, content) => {
      axios
        .put(`http://localhost:8080/quotes/${quote._id}`, {
          content,
          userId: user.userId,
        })
        .then((res) => {
          refreshQuotes(user.userId);
        });
    },
    [user, refreshQuotes]
  );

  const deleteQuote = useCallback(
    (quote, content) => {
      axios.delete(`http://localhost:8080/quotes/${quote._id}`).then((res) => {
        refreshQuotes(user.userId);
      });
    },
    [user, refreshQuotes]
  );

  return (
    <div className="App">
      <UserContext.Provider value={{ user, isLoggedIn }}>
        <QuotesContext.Provider
          value={{
            quotesList,
            refreshQuotes,
            filterQuotesByTag,
            saveQuote,
            deleteQuote,
          }}
        >
          <Navbar />
          <Horizontal>
            <CategoriesPanel />
            <MainContent />
            <FeaturePanel />
          </Horizontal>
        </QuotesContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
