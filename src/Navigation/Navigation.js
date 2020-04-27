import React from "react";
import "./Navigation.css";
import TokenService from "../services/token-service";
import { stack as Menu } from "react-burger-menu";

const Navigation = ({ setSignedIn, signedIn }) => {
  if (signedIn) {
    return (
      <Menu>
        <a className="menu-item" href="/library">
          Library
        </a>
        <a
          onClick={() => {
            TokenService.clearAuthToken();
            setSignedIn(false);
          }}
          className="menu-item"
          href="/"
        >
          Logout
        </a>
      </Menu>
    );
  } else {
    return (
      <Menu>
        <a href="/register">Register</a>
        <a href="/signin">Signin</a>
        <a href="/">Landing Page</a>
      </Menu>
    );
  }
};

export default Navigation;
