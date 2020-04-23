import React from "react";
import ReactDOM from "react-dom";
import UpdateSheetForm from "./UpdateSheetForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateSheetForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
