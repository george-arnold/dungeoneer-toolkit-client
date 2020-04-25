import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";

const Navigation = ({ setSignedIn, signedIn }) => {
  if (signedIn) {
    return (
      <nav className="Navigation">
        <Link
          onClick={() => {
            TokenService.clearAuthToken();
            setSignedIn(false);
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
        <Link to="/register">Register</Link>
        <Link to="/signin">Signin</Link>
      </nav>
    );
  }
};

export default Navigation;
