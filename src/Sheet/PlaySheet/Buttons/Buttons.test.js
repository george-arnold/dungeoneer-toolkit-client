import React from "react";
import { render } from "@testing-library/react";
import Buttons from "./Buttons";

test("renders learn react link", () => {
  const { getByText } = render(<Buttons />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
