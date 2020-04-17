import React from "react";
import "./PlaySheet.css";
import GamePad from "./GamePad/GamePad";
const PlaySheet = (props) => {
  const { character } = props;

  return (
    <section className="PlaySheet">
      <h3 className="Name">Name: {character.name}</h3>
      <h3 className="Level">Level: {character.level}</h3>
      <h3 className="Class">Class: {character.class}</h3>
      <h3 className="HP">HP: {character.hp}</h3>
      <div className="FlexboxContainer">
        <h6 className="Strength">Strength: {character.strength}</h6>
        <h6 className="Dexterity">Dexterity: {character.dexterity}</h6>
        <h6 className="Constitution">Constitution: {character.constitution}</h6>
        <h6 className="Intelligence">Intelligence: {character.intelligence}</h6>
        <h6 className="Wisdom">Wisdom: {character.wisdom}</h6>
        <h6 className="Charisma">Charisma: {character.charisma}</h6>
      </div>
      <GamePad />
    </section>
  );
};

export default PlaySheet;
