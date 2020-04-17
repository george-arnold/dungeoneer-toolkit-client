import React from "react";
import "./Sheet.css";
// import SheetNav from "./SheetNav/SheetNav";
import UpdateSheetForm from "./UpdateSheetForm/UpdateSheetForm";
import PlaySheet from "./PlaySheet/PlaySheet";

const Sheet = (props) => {
  let { id } = props.match.params;
  const { characters } = props;

  id = Number(id);
  console.log(id);
  const character = characters[id];

  return (
    <main>
      <h2>Your Character Sheet</h2>
      {/* <SheetNav id={id} /> */}
      <UpdateSheetForm id={id} character={character} />
      <PlaySheet id={id} character={character} />
    </main>
  );
};

export default Sheet;
