import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";

const Navigation = (props) => {
  let signedIn = false;
  if (!!TokenService.getAuthToken()) {
    signedIn = true;
  }
  if (signedIn) {
    return (
      <nav className="Navigation">
        <Link
          onClick={() => {
            TokenService.clearAuthToken();
          }}
          to="/"
        >
          Logout
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="Navigation">
        <Link to="/signin">Signin</Link>
        <Link to="/register">Register</Link>
      </nav>
    );
  }
};

export default Navigation;
