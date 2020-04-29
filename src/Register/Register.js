import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthApiService from "../services/auth-api-service";
import "./Register.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [submissionError, setSubmissionError] = useState(null);
  return (
    <main>
      <h1 className="SignInHeading">Register as New User</h1>
      <div className="error">{submissionError}</div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          AuthApiService.postUser({
            email: values.email,
            password: values.password,
          })
            .then((user) => {
              //resets values after submit
              values.email = "";
              values.password = "";
              setSubmitting(false);
              history.push("/signin");
            })
            .catch((res) => {
              if (res.email) {
                setSubmissionError(res.email);
              }
              if (res.password) {
                setSubmissionError(res.password);
              }
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="SignInForm">
            <label htmlFor="email">Email Address:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="email">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Register;
