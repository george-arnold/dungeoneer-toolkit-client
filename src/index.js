import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <h1>Hey some async call in progress ! </h1>;
};

ReactDOM.render(
  <div>
    <App />
    <LoadingIndicator />
  </div>,
  document.getElementById("root")
);
