import React from "react";
import "./PlaySheet.css";
import GamePad from "./GamePad/GamePad";

//figure out which thing to use
//for each if character class is X make attackStat
const PlaySheet = (props) => {
  const { character } = props;
  const statsPerClass = [
    { role: "Thief", stat: character.dexterity, statName: "Dexterity" },
    { role: "Warrior", stat: character.strength, statName: "Strength" },
    { role: "Brute", stat: character.constitution, statName: "Constitution" },
    { role: "Mage", stat: character.intelligence, statName: "Intelligence" },
    { role: "Hunter", stat: character.wisdom, statName: "Wisdom" },
    { role: "Bard", stat: character.charisma, statName: "Charisma" },
  ];
  let attackBonus = null;
  let attackStat = null;
  const configureAttackBonus = (role) => {
    statsPerClass.forEach((data) => {
      if (data.role === role) {
        attackBonus = data.stat / 2 - 5;
        attackStat = data.statName;
      }
    });
  };
  return (
    <section className="PlaySheet">
      <h3 className="Name">Name: {character.name}</h3>
      <h3 className="Level">Level: {character.level}</h3>
      <h3 className="Class">Class: {character.role}</h3>
      <h3 className="HP">HP: {character.hp}</h3>
      <div className="FlexboxContainer">
        <h6 className="Strength">
          Str: {character.strength}
          <div>{`${character.strength / 2 - 5}`}</div>
        </h6>
        <h6 className="Dexterity">
          Dex: {character.dexterity}{" "}
          <div>{`${character.dexterity / 2 - 5}`}</div>
        </h6>
        <h6 className="Constitution">
          Con: {character.constitution}{" "}
          <div>{`${character.constitution / 2 - 5}`}</div>
        </h6>
        <h6 className="Intelligence">
          Int: {character.intelligence}{" "}
          <div>{`${character.intelligence / 2 - 5}`}</div>
        </h6>
        <h6 className="Wisdom">
          Wis: {character.wisdom} <div>{`${character.wisdom / 2 - 5}`}</div>
        </h6>
        <h6 className="Charisma">
          Cha: {character.charisma} <div>{`${character.charisma / 2 - 5}`}</div>
        </h6>
      </div>
      <h3>
        {configureAttackBonus(character.role)}
        {`Attack Bonus: ${attackBonus} (${attackStat})`}
      </h3>
      <ul>
        {" "}
        <li>Click a button below to roll!</li>
        <li>The Attack Bonus uses your class's primary stat</li>
      </ul>
      <GamePad attackBonus={attackBonus} attackStat={attackStat} />
    </section>
  );
};

export default PlaySheet;
