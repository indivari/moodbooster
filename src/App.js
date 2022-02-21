import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Nav";
import { CategoriesPanel } from "./components/CategoriesPanel";
import { FeaturePanel } from "./components/FeaturePanel";
import { useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import axios from "axios";
import { UserContext } from "./UserContext";
import { QuotesContext } from "./QuotesContext";
import { MainContent } from "./components/MainContent";

import styled from "styled-components";
import { useCallback } from "react";
import { useMemo } from "react";
import { Dashboard } from "./components/MainContent/Dashboard";

const Horizontal = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
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

  useEffect(() => {
    axios.get("http://localhost:8080/quotes/list").then((res) => {
      console.log("quotes response", res.data);
      setQuotesList(res.data);
    });
  }, []);

  const handleLoginAction = (loginStatus) => {
    setIsLoginClicked(loginStatus);
  };

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

  return (
    <div className="App">
      <UserContext.Provider value={{ user, isLoggedIn }}>
        <QuotesContext.Provider
          value={{ quotesList, refreshQuotes, filterQuotesByTag }}
        >
          {isLoginClicked ? (
            <LoginForm />
          ) : (
            <>
              <Navbar onLogin={handleLoginAction} />
              <Horizontal>
                <CategoriesPanel />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/" element={<MainContent />} />
                </Routes>
                <FeaturePanel />
              </Horizontal>
            </>
          )}
        </QuotesContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
