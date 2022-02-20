import "./App.css";

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

const Horizontal = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: mistyrose;
`;

function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [user, setUser] = useState();
  const [quotesList, setQuotesList] = useState([]);

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

  const refreshQuotes = () => {
    axios.get("http://localhost:8080/quotes/list").then((res) => {
      console.log("quotes response", res.data);
      setQuotesList(res.data);
    });
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <QuotesContext.Provider value={{ quotesList, refreshQuotes }}>
          {isLoginClicked ? (
            <LoginForm />
          ) : (
            <>
              <Navbar onLogin={handleLoginAction} />
              <Horizontal>
                <CategoriesPanel />
                <MainContent />
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
