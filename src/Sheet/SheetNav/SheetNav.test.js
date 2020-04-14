import React from "react";
import { render } from "@testing-library/react";
import SheetNav from "./SheetNav";

test("renders learn react link", () => {
  const { getByText } = render(<SheetNav />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
