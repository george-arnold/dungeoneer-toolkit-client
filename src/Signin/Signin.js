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
      <h1 className="SignInHeading">Sign in</h1>

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
          <Form className="SignInForm">
            <p> Make sure you've registered first!</p>
            <label htmlFor="email">Email Address:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <div>{submissionError}</div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Signin;
