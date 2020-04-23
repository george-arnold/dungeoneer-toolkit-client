import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthApiService from '../services/auth-api-service';
import './Register.css';
import { useHistory } from 'react-router-dom';

const Register = props => {
  let history = useHistory();
  const [submissionError, setSubmissionError] = useState(null);
  return (
    <main>
      <h1>Register as New User</h1>
      <div className="error">{submissionError}</div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          AuthApiService.postUser({
            email: values.email,
            password: values.password
          })
            .then(user => {
              values.email = '';
              values.password = '';
              history.push('/library');
              props.handleSignin(true);
            })
            .catch(res => {
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

export default Register;
