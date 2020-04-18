import React, { useState } from "react";
import "./UpdateSheetForm.css";
import { Formik } from "formik";

const UpdateSheetForm = (props) => {
  const { character } = props;
  console.log(character);
  return (
    <div>
      <Formik
        initialValues={{
          name: character.name,
          level: character.level,
          class: character.class,
          hp: character.hp,
          strength: character.strength,
          dexterity: character.dexterity,
          constitution: character.constitution,
          intelligence: character.intelligence,
          wisdom: character.wisdom,
          charisma: character.charisma,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.class) {
            errors.class = "Required";
          }
          if (!values.level) {
            errors.level = "Required";
          }
          if (!values.hp) {
            errors.hp = "Required";
          }
          if (!values.strength) {
            errors.strength = "Required";
          }
          if (!values.dexterity) {
            errors.dexterity = "Required";
          }
          if (!values.constitution) {
            errors.constitution = "Required";
          }
          if (!values.intelligence) {
            errors.intelligence = "Required";
          }
          if (!values.wisdom) {
            errors.wisdom = "Required";
          }
          if (!values.charisma) {
            errors.charisma = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 40000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="UpdateSheetForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <label htmlFor="class">Class:</label>
            <input
              type="class"
              name="class"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.class}
            />
            {errors.class && touched.class && errors.class}

            <label htmlFor="level">Level:</label>
            <input
              type="level"
              name="level"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.level}
            />
            {errors.level && touched.level && errors.level}
            <label htmlFor="hp">Hp:</label>
            <input
              type="hp"
              name="hp"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hp}
            />
            {errors.hp && touched.hp && errors.hp}
            <label htmlFor="strength">Strength:</label>
            <input
              type="strength"
              name="strength"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.strength}
            />
            {errors.strength && touched.strength && errors.strength}
            <label htmlFor="dexterity">Dexterity:</label>
            <input
              type="dexterity"
              name="dexterity"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dexterity}
            />
            {errors.dexterity && touched.dexterity && errors.dexterity}
            <label htmlFor="constitution">Constitution:</label>
            <input
              type="constitution"
              name="constitution"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.constitution}
            />
            {errors.constitution && touched.constitution && errors.constitution}
            <label htmlFor="intelligence">Intelligence:</label>
            <input
              type="intelligence"
              name="intelligence"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.intelligence}
            />
            {errors.intelligence && touched.intelligence && errors.intelligence}
            <label htmlFor="wisdom">Wisdom:</label>
            <input
              type="wisdom"
              name="wisdom"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.wisdom}
            />
            {errors.wisdom && touched.wisdom && errors.wisdom}
            <label htmlFor="charisma">Charisma:</label>
            <input
              type="charisma"
              name="charisma"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.charisma}
            />
            {errors.charisma && touched.charisma && errors.charisma}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>

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
      {/* <input
        className="Submit"
        type="submit"
        onClick={() => this.context.onUpdateItem(id, character)}
        value="Update Character"
      ></input> */}
    </div>
  );
};

export default UpdateSheetForm;
