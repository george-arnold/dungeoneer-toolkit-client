import React from "react";
import { render } from "@testing-library/react";
import ButtonList from "./ButtonList";

test("renders learn react link", () => {
  const { getByText } = render(<ButtonList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
