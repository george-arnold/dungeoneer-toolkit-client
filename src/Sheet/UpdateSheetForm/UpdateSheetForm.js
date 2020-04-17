import React, { useState } from "react";
import "./UpdateSheetForm.css";
const UpdateSheetForm = (props) => {
  const { character } = props;
  const { id } = props;
  // const [name, setName] = useState()
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.context.onUpdateItem(id, characters);
  // }

  const statTypesArray = [
    "Strength",
    "Constitution",
    "Dexterity",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  return (
    <form className="UpdateSheetForm">
      <label> Name </label>
      <input type="text" value={character.name} />
      {/*  this is commented out so that I can isolate the problem with passing information from context and updating it in the form
        <label>Level </label>
        <input type="number" value={character.level} />
        <label>Hit Points </label>
        <input type="number" value={character.hp} />

        <select value={character.class}>
          <option> Select a class </option>
          <option value={"Thief"}>Thief(Dex)</option>
          <option value={"Warrior"}>Warrior (Str)</option>
          <option value={"Brute"}> Brute (Con) </option>
          <option value={"Mage"}>Mage (Int) </option>
          <option value={"Bard"}>Bard (Cha)</option>
          <option value={"Hunter"}> Hunter (Wis)</option>
        </select>

        {/* {statTypesArray.map((stat) => {
          return (
            <div key={stat}>
              <label htmlFor={stat}> {stat} </label>
              <input name={stat} id={stat} type="number" value={character.stat} />
            </div>
          );
        })} */}
      {/* <div>
          <label> Strength </label>
          <input type="number" value={character.strength} />
          <label> Dexterity </label>
          <input type="number" value={character.dexterity} />
          <label> Constitution </label>
          <input type="number" value={character.constitution} />
          <label> Intelligence </label>
          <input type="number" value={character.intelligence} />
          <label> Wisdom </label>
          <input type="number" value={character.wisdom} />
          <label> Charisma</label>
          <input type="number" value={character.charisma} />
        </div> */}
      <input
        className="Submit"
        type="submit"
        onClick={() => this.context.onUpdateItem(id, character)}
        value="Update Character"
      ></input>
    </form>
  );
};

export default UpdateSheetForm;
