import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";
import CharacterLibrary from "../CharacterLibrary/CharacterLibrary";
import Sheet from "../Sheet/Sheet";
const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <main>
      <Navigation handleSignIn={setSignedIn} signedIn={signedIn} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signin">
          <Signin setSignedIn={setSignedIn} />
        </Route>
        <Route
          exact
          path="/library"
          render={(props) => <CharacterLibrary {...props} />}
        />
        <Route
          path={`/character/:id`}
          render={(props) => <Sheet {...props} />}
        />
      </Switch>
    </main>
  );
};

export default App;
