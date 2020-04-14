import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./CharacterLibrary";

test("renders learn react link", () => {
  const { getByText } = render(<LandingPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
