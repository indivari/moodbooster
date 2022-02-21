import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap-4-react";
import axios from "axios";

export const ImgProfilePhoto = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

export const Username = styled.div`
  display: inline;
  margin: 0 10px;
  color: #333;
  font-weight: bold;
`;

export const ProfileDropdown = ({ user }) => {
  let userOnBoard = false;

  const handleLogout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  // const displayDashboard = () => {
  //   userOnBoard = true;

  //   console.log("user", user.userId);
  //   console.log("Dashboard");
  //   axios
  //     .get(`http://localhost:8080/users/${user.userId}/quotes`)
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };

  return (
    <Dropdown>
      <Dropdown.Button
        style={{ backgroundColor: "white" }}
        id="dropdownMenuButton"
      >
        <a href="#">
          <ImgProfilePhoto src={user.profilePhoto} alt={user.name} />
          <Username>{user.name}</Username>
        </a>
      </Dropdown.Button>
      <Dropdown.Menu
        aria-labelledby="dropdownMenuButton"
        className="dropdown-menu dropdown-menu-right"
      >
        <Dropdown.Item href="#">
          <Link to="/dashboard">Dashboard</Link>
        </Dropdown.Item>
        <div class="dropdown-divider"></div>
        <Dropdown.Item href="#" onClick={handleLogout}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// export const UserProfile = ({ user }) => {
//   return <ImgProfilePhoto src={user.profilePhoto} alt={user.name} />;
// };
