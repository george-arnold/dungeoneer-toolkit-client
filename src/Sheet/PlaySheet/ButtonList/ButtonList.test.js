import React from "react";
import ReactDOM from "react-dom";
import ButtonList from "./ButtonList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ButtonList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
