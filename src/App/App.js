import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";
import CharacterLibrary from "../CharacterLibrary/CharacterLibrary";
import Sheet from "../Sheet/Sheet";
import Register from "../Register/Register";
import useLocalStorage from "../App/app-helper";

const App = () => {
  const [signedIn, setSignedIn] = useLocalStorage("signedIn", false);

  return (
    <main>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Signin setSignedIn={setSignedIn} />
        </Route>
        <Route path="/">
          <Navigation setSignedIn={setSignedIn} signedIn={signedIn} />
        </Route>
      </Switch>
      <Route exact path="/" component={LandingPage} />

      <Route
        exact
        path="/library"
        render={(props) => <CharacterLibrary {...props} />}
      />
      <Route path={`/character/:id`} render={(props) => <Sheet {...props} />} />
    </main>
  );
};

export default App;
