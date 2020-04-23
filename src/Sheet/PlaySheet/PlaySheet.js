import React from "react";
import "./PlaySheet.css";
import GamePad from "./GamePad/GamePad";

//figure out which thing to use
//for each if character class is X make attackStat
const PlaySheet = (props) => {
  const { character } = props;
  console.log(character);
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
          Strength: {character.strength}
          <div>{`Modifier:${character.strength / 2 - 5}`}</div>
        </h6>
        <h6 className="Dexterity">
          Dexterity: {character.dexterity}{" "}
          <div>{`Modifier:${character.dexterity / 2 - 5}`}</div>
        </h6>
        <h6 className="Constitution">
          Constitution: {character.constitution}{" "}
          <div>{`Modifier:${character.constitution / 2 - 5}`}</div>
        </h6>
        <h6 className="Intelligence">
          Intelligence: {character.intelligence}{" "}
          <div>{`Modifier:${character.intelligence / 2 - 5}`}</div>
        </h6>
        <h6 className="Wisdom">
          Wisdom: {character.wisdom}{" "}
          <div>{`Modifier:${character.wisdom / 2 - 5}`}</div>
        </h6>
        <h6 className="Charisma">
          Charisma: {character.charisma}{" "}
          <div>{`Modifier:${character.charisma / 2 - 5}`}</div>
        </h6>
      </div>
      <h3>
        {configureAttackBonus(character.role)}
        {`Attack Bonus: ${attackBonus} (${attackStat})`}
      </h3>
      <h2>
        {" "}
        Click a button below to roll! The Attack Bonus uses your primary stat
        (based on your class!)
      </h2>
      <GamePad attackBonus={attackBonus} attackStat={attackStat} />
    </section>
  );
};

export default PlaySheet;
