import React from "react";
import { render } from "@testing-library/react";
import DiceOutput from "./DiceOutput";

test("renders learn react link", () => {
  const { getByText } = render(<DiceOutput />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
