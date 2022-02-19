import "./App.css";

import { Navbar } from "./components/Navbar";
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
  const [profilePhoto, setProfilePhoto] = useState("");

  const [quotesList, setQuotesList] = useState("");

  const [userId, setUserId] = useState("");

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
            setUser(res.data.user.name);
            setUserId(res.data.user.userId);
            setProfilePhoto(res.data.user.profilePhoto);
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
      console.log("quotes response" + res);
    });
  }, []);

  const handleLoginAction = (loginStatus) => {
    setIsLoginClicked(loginStatus);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ userId }}>
        {isLoginClicked ? (
          <LoginForm />
        ) : (
          <>
            <Navbar onLogin={handleLoginAction} />
            <img id="profile-img" src={profilePhoto} alt="" />
            <span>{user}</span>

            <div className="container-wrapper">
              <CategoriesPanel />
              <QuotesPanel />
              <FeaturePanel />
            </div>
          </>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
