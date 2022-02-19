import "./App.css";

import { Navbar } from "./components/Nav";
import { CategoriesPanel } from "./components/CategoriesPanel";
import { QuotesPanel } from "./components/QuotesPanel";
import { FeaturePanel } from "./components/FeaturePanel";
import { useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import axios from "axios";
import { UserContext } from "./UserContext";

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
    console.log("loaded");
    axios.get("http://localhost:8080/quotes/list").then((res) => {
      console.log("quotes response", res.data);
      setQuotesList(res.data);
    });
  }, []);

  const handleLoginAction = (loginStatus) => {
    setIsLoginClicked(loginStatus);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, quotesList }}>
        {isLoginClicked ? (
          <LoginForm />
        ) : (
          <>
            <Navbar onLogin={handleLoginAction} />
            <div className="container-wrapper">
              <CategoriesPanel />
              <QuotesPanel quotesList={quotesList} />
              <FeaturePanel />
            </div>
          </>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
