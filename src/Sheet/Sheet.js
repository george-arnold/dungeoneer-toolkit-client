import React, { useState } from "react";
import "./Sheet.css";
import SheetNav from "./SheetNav/SheetNav";
import UpdateSheetForm from "./UpdateSheetForm/UpdateSheetForm";
import PlaySheet from "./PlaySheet/PlaySheet";
import CharacterDataSTORE from "../CharacterDataSTORE";
import { Switch, Route } from "react-router-dom";

const Sheet = (props) => {
  let { id } = props.match.params;

  id = Number(id);

  const characters = CharacterDataSTORE;
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
  console.log("path in Sheet", props.match.path);

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
