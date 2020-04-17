import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = (props) => {
  return (
    <main>
      <button onClick={() => props.setSignedIn(true)}>
        <Link to="/library">Signin</Link>
      </button>
    </main>
  );
};

export default Signin;
