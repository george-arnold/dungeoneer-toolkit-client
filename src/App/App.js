import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";
import CharacterLibrary from "../CharacterLibrary/CharacterLibrary";
import Sheet from "../Sheet/Sheet";
import Register from "../Register/Register";
import useLocalStorage from "../App/app-helper";

const Main = ({ children }) => {
  return <main>{children}</main>;
};

const App = () => {
  // signIn sticks through page refresh
  const [signedIn, setSignedIn] = useLocalStorage("signedIn", false);

  return (
    <>
      <Navigation setSignedIn={setSignedIn} signedIn={signedIn} />
      <Main>
        <Route exact path="/">
          <LandingPage setSignedIn={setSignedIn} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signin">
          <Signin setSignedIn={setSignedIn} />
        </Route>
        <Route
          path="/library"
          render={(props) => <CharacterLibrary {...props} />}
        />
        <Route
          path={`/character/:id`}
          render={(props) => <Sheet {...props} />}
        />
      </Main>
    </>
  );
};

export default App;
