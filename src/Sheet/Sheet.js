import React, { useState } from "react";
import "./Sheet.css";
import SheetNav from "./SheetNav/SheetNav";
import UpdateSheetForm from "./UpdateSheetForm/UpdateSheetForm";
import PlaySheet from "./PlaySheet/PlaySheet";
import CharacterDataSTORE from "../CharacterDataSTORE";

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

  return (
    <main>
      <h2>Your Character Sheet</h2>
      <SheetNav id={id} />
      <UpdateSheetForm character={character} setCharacter={setCharacter} />
      {/* <PlaySheet megaState={megaState} /> */}
    </main>
  );
};

export default Sheet;
