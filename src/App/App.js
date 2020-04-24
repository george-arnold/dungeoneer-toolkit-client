import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";
import CharacterLibrary from "../CharacterLibrary/CharacterLibrary";
import Sheet from "../Sheet/Sheet";
import Register from "../Register/Register";
// import TokenService from "../services/token-service";
const App = () => {
  // let signedIn = false;
  // if (!!TokenService.getAuthToken()) {
  //   signedIn = true;
  // }
  return (
    <main>
      <Navigation />

      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Signin />
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
