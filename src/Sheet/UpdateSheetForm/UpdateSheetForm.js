import React from "react";
import "./UpdateSheetForm.css";
import { Formik } from "formik";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";

import config from "../../config";
const UpdateSheetForm = (props) => {
  const { character, id } = props;
  const roleOptions = ["Thief", "Warrior", "Brute", "Mage", "Hunter", "Bard"];
  return (
    <div>
      <nav className="SheetNav">
        <Link className="SelectedNav" to={`/character/${id}/edit`}>
          Edit
        </Link>
        <Link className="NotSelected" to={`/character/${id}`}>
          View/Play
        </Link>
      </nav>
      <Formik
        initialValues={{
          name: character.name,
          level: character.level,
          role: character.role,
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
          if (!values.role) {
            errors.role = "Required";
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
          console.log(TokenService.getAuthToken());

          fetch(`${config.API_ENDPOINT}/characters/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(values),
          })
            .then((res) =>
              !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .then((res) => {
              props.setCharacter(values);
              props.history.push(`/character/${id}/play`);
            })
            .catch((error) => {
              setSubmitting(false);
              console.log(error);
            });
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
            <div className="FormContainer">
              <label htmlFor="name">Name:</label>
              <input
                type="tet"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </div>
            <div className="FormContainer">
              <label htmlFor="level">Level:</label>
              <input
                type="number"
                name="level"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.level}
              />
              {errors.level && touched.level && errors.level}
            </div>
            <div className="FormContainer">
              <label htmlFor="role">Class:</label>
              <select
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" label="Select a role" />

                {roleOptions.map((role) => (
                  <option
                    key={roleOptions.indexOf(role)}
                    value={role}
                    label={role}
                  />
                ))}
              </select>

              {errors.role && touched.role && errors.role}
            </div>
            <div className="FormContainer">
              <label htmlFor="hp">Hp:</label>
              <input
                type="number"
                name="hp"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hp}
              />
              {errors.hp && touched.hp && errors.hp}
            </div>
            <div className="StatContainer">
              <div>
                <label htmlFor="strength">Str:</label>
                <input
                  type="number"
                  name="strength"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.strength}
                />
                {errors.strength && touched.strength && errors.strength}
              </div>
              <div>
                <label htmlFor="dexterity">Dex:</label>
                <input
                  type="number"
                  name="dexterity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dexterity}
                />

                {errors.dexterity && touched.dexterity && errors.dexterity}
              </div>
              <div>
                <label htmlFor="constitution">Con:</label>
                <input
                  type="number"
                  name="constitution"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.constitution}
                />
                {errors.constitution &&
                  touched.constitution &&
                  errors.constitution}
              </div>
              <div>
                <label htmlFor="intelligence">Int:</label>
                <input
                  type="number"
                  name="intelligence"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.intelligence}
                />
                {errors.intelligence &&
                  touched.intelligence &&
                  errors.intelligence}
              </div>
              <div>
                <label htmlFor="wisdom">Wis:</label>
                <input
                  type="number"
                  name="wisdom"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.wisdom}
                />
                {errors.wisdom && touched.wisdom && errors.wisdom}
              </div>
              <div>
                <label htmlFor="charisma">Cha:</label>
                <input
                  type="number"
                  name="charisma"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.charisma}
                />
                {errors.charisma && touched.charisma && errors.charisma}
              </div>
            </div>
            <ul>
              <li>Type into the boxes to make changes</li>
              <li>You must hit "Save Changes" for your changes to stick!</li>
            </ul>
            <button type="submit" disabled={isSubmitting}>
              Save Changes
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateSheetForm;
