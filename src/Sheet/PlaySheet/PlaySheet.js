import React from "react";
import "./PlaySheet.css";
import GamePad from "./GamePad/GamePad";

//figure out which thing to use
//for each if character class is X make attackStat
const PlaySheet = (props) => {
  const { character } = props;
  // stores which class uses which stat for attack bonus
  const classDictionary = {
    strength: "Warrior",
    dexterity: "Thief",
    constitution: "Brute",
    intelligence: "Mage",
    wisdom: "Hunter",
    charisma: "Bard",
  };

  let attackBonus = null;
  let attackStat = null;

  const configureAttackBonus = (role) => {
    // calculates attack bonus based on class
    Object.keys(classDictionary).forEach((data) => {
      if (classDictionary[data] === role) {
        attackBonus = character[data] / 2 - 5;
        attackStat = data.statName;
      }
    });
  };

  return (
    <section className="PlaySheet">
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
        <span className="smallstat">{attackStat}</span>
      </h3>
      <div className="FlexboxContainer">
        {Object.keys(classDictionary).map((stat, index) => {
          return (
            <h6 key={index}>
              {stat} {character[stat]}
              <div>{`${Math.floor(character[stat] / 2 - 5)}`}</div>
            </h6>
          );
        })}
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
