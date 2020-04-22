import React, { useState, useEffect } from "react";
import "./Sheet.css";
import SheetNav from "./SheetNav/SheetNav";
import UpdateSheetForm from "./UpdateSheetForm/UpdateSheetForm";
import PlaySheet from "./PlaySheet/PlaySheet";
import { Switch, Route } from "react-router-dom";
import config from "../config";
import TokenService from "../services/token-service";

const Sheet = (props) => {
  let { id } = props.match.params;
  id = Number(id);
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/characters/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((charactersRes) => {
        if (!charactersRes.ok) {
          return charactersRes.json().then((event) => Promise.reject(event));
        }
        return charactersRes.json();
      })
      .then((characterData) => {
        setCharacter(characterData);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <main>
      <h2>Your Character Sheet</h2>
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
