import React from "react";
import "./PlaySheet.css";
import GamePad from "./GamePad/GamePad";
const PlaySheet = (props) => {
  const { characters } = props;
  let { id } = props.match.params;
  id = Number(id);
  return (
    <section className="PlaySheet">
      <h3 className="Name">Name: {characters[id].name}</h3>
      <h3 className="Level">Level: {characters[id].level}</h3>
      <h3 className="Class">Class: {characters[id].class}</h3>
      <h3 className="HP">HP: {characters[id].hp}</h3>
      <div className="FlexboxContainer">
        <h6 className="Strength">Strength: {characters[id].strength}</h6>
        <h6 className="Dexterity">Dexterity: {characters[id].dexterity}</h6>
        <h6 className="Constitution">
          Constitution: {characters[id].constitution}
        </h6>
        <h6 className="Intelligence">
          Intelligence: {characters[id].intelligence}
        </h6>
        <h6 className="Wisdom">Wisdom: {characters[id].wisdom}</h6>
        <h6 className="Charisma">Charisma: {characters[id].charisma}</h6>
      </div>
      <GamePad id={id} />
    </section>
  );
};

export default PlaySheet;
