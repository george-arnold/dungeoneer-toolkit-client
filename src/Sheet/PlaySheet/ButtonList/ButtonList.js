import React, { Component } from "react";
import "./ButtonList.css";
// import CharacterNavContext from "../../../CharacterNavContext";
import DungeoneerContext from "../../../DungeoneerContext";
class ButtonList extends Component {
  static contextType = DungeoneerContext;
  randomNumber = (diceValue) => {
    return Math.floor(Math.random() * Math.floor(diceValue)) + 1;
  };
  render() {
    //  find selected character
    //  observe character's class
    // use relevant modifier to class
    const { id } = this.props;
    const character = this.context.characters[id];
    const charClass = character.class;
    let attackBonus = null;
    if (charClass === "Brute") {
      attackBonus = character.constitution / 2 - 5;
    }
    if (charClass === "Warrior") {
      attackBonus = character.strength / 2 - 5;
    }
    if (charClass === "Thief") {
      attackBonus = character.dexterity / 2 - 5;
    }
    if (charClass === "Mage") {
      attackBonus = character.intelligence / 2 - 5;
    }
    if (charClass === "Hunter") {
      attackBonus = character.wisdom / 2 - 5;
    }
    if (charClass === "Bard") {
      attackBonus = character.charisma / 2 - 5;
    }
    const diceArray = [4, 6, 8, 10, 20];

    return (
      <div className="ButtonList">
        {diceArray.map((dieValue) => {
          return (
            //creates a button for each kind of die
            <button
              key={dieValue}
              onClick={() =>
                this.props.changeValue(this.randomNumber(dieValue))
              }
            >
              d{dieValue}
            </button>
          );
        })}
        {/* needs to be randomnumber20 + relevant character class stat */}
        <button
          onClick={() =>
            this.props.changeValue(this.randomNumber(20) + attackBonus)
          }
        >
          Attack Roll
        </button>
      </div>
    );
  }
}

export default ButtonList;
