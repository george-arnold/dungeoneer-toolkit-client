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

  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({
    name: characters[id].name,
    level: characters[id].level,
    class: characters[id].class,
    hp: characters[id].hp,
    strength: characters[id].strength,
    dexterity: characters[id].dexterity,
    constitution: characters[id].constitution,
    intelligence: characters[id].intelligence,
    wisdom: characters[id].wisdom,
    charisma: characters[id].charisma,
  });
  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/characters`, {
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
      .then((characterArray) => {
        setCharacters(characterArray);
      })
      .catch((error) => console.log(error));
  });
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
