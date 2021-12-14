// __tests__/fetch.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../app";

beforeEach(() => {
  render(<App />);
});

test("loads and displays form", async () => {
  expect(screen.getByLabelText("todo-form")).toBeDefined();
});
test("It should create a new todo", () => {
  const text = screen.getByLabelText("text");
  const assignee = screen.getByLabelText("assignee");
  const range = screen.getByLabelText("range");
  const submit = screen.getByText("Add Item");
  const inputs = [text, assignee, range];
  const todo = ["make the tests pass", "make the tests pass", 2];
  todo.forEach((todo, i) => {
    fireEvent.change(inputs[i], { target: { value: todo } });
  });
  fireEvent.click(submit);
  expect(screen.getByLabelText("make the tests pass")).toBeTruthy();
});
