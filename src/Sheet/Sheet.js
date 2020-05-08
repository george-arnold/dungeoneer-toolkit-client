import React, { useState, useEffect } from "react";
import "./Sheet.css";

import UpdateSheetForm from "./UpdateSheetForm/UpdateSheetForm";
import PlaySheet from "./PlaySheet/PlaySheet";
import { Switch, Route } from "react-router-dom";
import config from "../config";
import TokenService from "../services/token-service";
// eslint-disable-next-line
import SheetNav from "./SheetNav/SheetNav";
const Sheet = (props) => {
  let { id } = props.match.params;
  id = Number(id);
  const [character, setCharacter] = useState({});
  console.log("id in Sheet", id);
  useEffect(() => {
    //fetches characters by id in object
    fetch(`${config.API_ENDPOINT}/characters/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((charactersRes) => {
        if (!charactersRes.ok) {
          return charactersRes.json().then((event) => Promise.reject(event));
        }
        return charactersRes.json();
      })
      .then((characterData) => {
        //pushes character to state
        console.log("character data received in GET", characterData);
        setCharacter(characterData);
      })
      .catch((error) => console.log(error));
    // disable ability to change id
    // eslint-disable-next-line
  }, []);
  return (
    <main className="Sheet">
      <h2>Character Sheet</h2>
      <SheetNav id={id} />
      <Switch>
        <Route
          path={`${props.match.path}/edit`}
          render={(props) => (
            <UpdateSheetForm
              {...props}
              character={character}
              setCharacter={setCharacter}
              id={id}
            />
          )}
        />
        <Route
          path={`${props.match.path}`}
          render={(props) => <PlaySheet {...props} character={character} />}
        />
      </Switch>
    </main>
  );
};

export default Sheet;
