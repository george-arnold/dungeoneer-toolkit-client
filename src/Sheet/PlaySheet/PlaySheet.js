import React from "react";
import "./PlaySheet.css";
import GamePad from "./GamePad/GamePad";
import { Link } from "react-router-dom";

//figure out which thing to use
//for each if character class is X make attackStat
const PlaySheet = (props) => {
  const { character } = props;
  // stores which class uses which stat for attack bonus
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
  // calculates attack bonus based on class
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
      <nav className="SheetNav">
        <Link className="NotSelected" to={`/character/${character.id}/edit`}>
          Edit
        </Link>
        <Link className="SelectedNav" to={`/character/${character.id}`}>
          View/Play
        </Link>
      </nav>
      <h3 className="Name">
        <span>Name:</span> {character.name}
      </h3>
      <h3 className="Level">
        <span>Level:</span> {character.level}
      </h3>
      <h3 className="Class">
        <span>Class: </span> {character.role}
      </h3>
      <h3 className="HP">
        <span>HP:</span> {character.hp}
      </h3>
      <h3>
        {configureAttackBonus(character.role)}
        <span>Attack Bonus:</span> {attackBonus}{" "}
        <span className="smallstat">({attackStat})</span>
      </h3>
      <div className="FlexboxContainer">
        <h6 className="Strength">
          Str: {character.strength}
          {/* calculate modifier for each stat */}
          <div>{`${Math.floor(character.strength / 2 - 5)}`}</div>
        </h6>
        <h6 className="Dexterity">
          Dex: {character.dexterity}{" "}
          <div>{`${Math.floor(character.dexterity / 2 - 5)}`}</div>
        </h6>
        <h6 className="Constitution">
          Con: {character.constitution}{" "}
          <div>{`${Math.floor(character.constitution / 2 - 5)}`}</div>
        </h6>
        <h6 className="Intelligence">
          Int: {character.intelligence}{" "}
          <div>{`${Math.floor(character.intelligence / 2 - 5)}`}</div>
        </h6>
        <h6 className="Wisdom">
          Wis: {character.wisdom}{" "}
          <div>{`${Math.floor(character.wisdom / 2 - 5)}`}</div>
        </h6>
        <h6 className="Charisma">
          Cha: {character.charisma}{" "}
          <div>{`${Math.floor(character.charisma / 2 - 5)}`}</div>
        </h6>
      </div>

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
