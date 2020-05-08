import React from "react";
import "./UpdateSheetForm.css";
import { Formik } from "formik";
import TokenService from "../../services/token-service";

import * as Yup from "yup";
import config from "../../config";

//sets up validator from yup library
const characterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  level: Yup.number()
    .integer()
    .required("Required")
    .positive()
    .max(20, "Cannot be over Level 20"),
  hp: Yup.number()
    .max(9999, "hp can't be over 9999")
    .positive("You're dead")
    .integer("round up")
    .required(),
  strength: Yup.number()
    .integer()
    .positive()
    .max(24, "Most stats are 20, max is 24"),
  dexterity: Yup.number()
    .integer()
    .positive()
    .max(24, "Most stats are 20, max is 24"),
  constitution: Yup.number()
    .integer()
    .positive()
    .max(24, "Most stats are 20, max is 24"),
  intelligence: Yup.number()
    .integer()
    .positive()
    .max(24, "Most stats are 20, max is 24"),
  wisdom: Yup.number()
    .integer()
    .positive()
    .max(24, "Most stats are 20, max is 24"),
  charisma: Yup.number()
    .integer()
    .positive()
    .max(24, "Most stats are 20, max is 24"),
});
const UpdateSheetForm = (props) => {
  const { character, id } = props;
  console.log("character", character);
  console.log("id in SheetForm", id);

  const roleOptions = ["Thief", "Warrior", "Brute", "Mage", "Hunter", "Bard"];
  return (
    <div>
      <Formik
        initialValues={{
          id: id,
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
        //infuses Yup with Formik to validate form
        validationSchema={characterSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values sent in form", values);
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
              console.log("values sent", values);
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
              </div>
            </div>
            <div className="StatErrors">
              {errors.strength && touched.strength && errors.strength}
              {errors.dexterity && touched.dexterity && errors.dexterity}
              {errors.constitution &&
                touched.constitution &&
                errors.constitution}
              {errors.intelligence &&
                touched.intelligence &&
                errors.intelligence}
              {errors.wisdom && touched.wisdom && errors.wisdom}

              {errors.charisma && touched.charisma && errors.charisma}
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
