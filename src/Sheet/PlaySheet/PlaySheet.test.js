import React from "react";
import ReactDOM from "react-dom";
import PlaySheet from "./PlaySheet";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PlaySheet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
