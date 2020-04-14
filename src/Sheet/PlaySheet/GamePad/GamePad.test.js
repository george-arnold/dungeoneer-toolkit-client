import React from "react";
import { render } from "@testing-library/react";
import Sheet from "./Sheet";

test("renders learn react link", () => {
  const { getByText } = render(<Sheet />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
