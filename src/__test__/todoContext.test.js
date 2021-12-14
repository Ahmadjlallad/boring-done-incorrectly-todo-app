import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SettingsContext from "../context/Settings";
import Settings from "../components/todo/settings.jsx";

const customRender = (ui) => {
  return render(<SettingsContext>{ui}</SettingsContext>);
};

test("use context and shows values from provider", () => {
  customRender(<Settings />);
  expect(screen.getByText(/^sort by:/)).toHaveTextContent("sort by: id");
});
test("change and Consumer the context", () => {
  customRender(<Settings />);
  const sortBy = screen.getByTestId("slider");
  fireEvent.change(sortBy, { value: 1 });
  expect(
    screen.getByText(/^number of Todo's in the same label:/)
  ).toHaveTextContent("number of Todo's in the same label: 2");
});
