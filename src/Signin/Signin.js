import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import "./Signin.css";
import { useHistory } from "react-router-dom";

const Signin = ({ setSignedIn }) => {
  let history = useHistory();
  const [submissionError, setSubmissionError] = useState(null);
  return (
    <main>
      <h1>Sign in as new user</h1>

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
          AuthApiService.postLogin({
            email: values.email,
            password: values.password,
          })
            .then((res) => {
              values.password = "";
              values.email = "";
              TokenService.saveAuthToken(res.authToken);
              setSignedIn(true);
              setSubmitting(false);
              history.push("/library");
            })
            .catch((res) => {
              if (res.email) {
                setSubmissionError(res.email);
              }
              if (res.password) {
                setSubmissionError(res.password);
              }
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
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

export default Signin;
