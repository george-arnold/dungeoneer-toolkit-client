import React from "react";
import ReactDOM from "react-dom";
import SheetNav from "./SheetNav";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SheetNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
