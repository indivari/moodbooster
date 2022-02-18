import "./App.css";

import { Navbar } from "./components/Navbar";
import { CategoriesPanel } from "./components/CategoriesPanel";
import { QuotesPanel } from "./components/QuotesPanel";
import { FeaturePanel } from "./components/FeaturePanel";
import { useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import axios from "axios";

function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [user, setUser] = useState();
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    const getUser = async () => {
      axios
        .get("http://localhost:8080/auth/profile")
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            setUser(res.data.user.displayName);
            setProfilePhoto(res.data.user.photos[0].value);
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

  // const fetchProfile = () => {
  //   axios.get("http://localhost:8080/auth/profile").then((res) => {
  //     console.log(res.data);
  //     setUser(res.data.user.displayName);
  //     setProfilePhoto(res.data.user.photos[0].value);
  //   });
  // };

  const handleLoginAction = (loginStatus) => {
    setIsLoginClicked(loginStatus);
  };

  return (
    <div className="App">
      {isLoginClicked ? (
        <LoginForm />
      ) : (
        <>
          <Navbar onLogin={handleLoginAction} />
          {/* <button onClick={fetchProfile}>Print profile</button> */}
          {user}
          <img id="profile-img" src={profilePhoto} alt="" />
          <div className="container-wrapper">
            <CategoriesPanel />
            <QuotesPanel />
            <FeaturePanel />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
