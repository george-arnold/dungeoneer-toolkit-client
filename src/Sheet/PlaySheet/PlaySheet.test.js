import React from "react";
import { render } from "@testing-library/react";
import PlaySheet from "./PlaySheet";

test("renders learn react link", () => {
  const { getByText } = render(<PlaySheet />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
