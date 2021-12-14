import React, { useState } from "react";
import useForm from "../../hooks/form.js";
import "./todo.scss";
import { v4 as uuid } from "uuid";
import List from "./List";
import {
  Alignment,
  Button,
  FormGroup,
  InputGroup,
  Navbar,
} from "@blueprintjs/core";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [range, setRange] = useState(3);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid() + new Date().getTime();
    item.complete = false;
    item.difficulty = item.difficulty ? item.difficulty : range;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  return (
    <>
      <Navbar
        className="bp3-navbar bp3-dark"
        style={{
          height: "4rem",
          margin: "0 auto",
          width: "80%",
          marginTop: "1rem",
        }}
        align={Alignment.LEFT}
      >
        <Navbar.Heading
          className="bp3-navbar-group bp3-align-left"
          style={{ fontSize: "1.5rem" }}
        >
          To Do List: {incomplete} items pending
        </Navbar.Heading>
      </Navbar>
      <div className="todo-container">
        <div className="todo-form">
          <form onSubmit={handleSubmit} aria-label="todo-form">
            <h2>Add To Do Item</h2>

            <FormGroup
              helperText="To Do Item details..."
              FormGroup="To Do Item"
              FormGroupFor="ToDoItem"
              FormGroupInfo="(required)"
            >
              <span>To Do Item</span>
              <InputGroup
                id="ToDoItem"
                onChange={handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
                aria-label="text"
              />
            </FormGroup>

            <FormGroup
              helperText="Assigned To"
              FormGroup="Assigned To"
              FormGroupFor="Assigned To"
              FormGroupInfo="(required)"
            >
              <InputGroup
                onChange={handleChange}
                name="assignee"
                type="text"
                placeholder="Assignee Name"
                aria-label="assignee"
              />
            </FormGroup>

            <FormGroup
              helperText="Difficulty"
              FormGroup="Difficulty"
              FormGroupFor="Difficulty"
              FormGroupInfo="(required)"
            >
              <InputGroup
                onChange={(e) => {
                  setRange(e.target.value);
                  handleChange(e);
                }}
                value={range}
                type="range"
                min={1}
                max={5}
                name="difficulty"
                placeholder="Difficulty"
                aria-label="range"
              />
            </FormGroup>

            <Button type="submit">Add Item</Button>
          </form>
        </div>
        <div className="todo-list">
          <List
            list={list}
            toggleComplete={toggleComplete}
            setIncomplete={setIncomplete}
            incomplete={incomplete}
          />
        </div>
      </div>
    </>
  );
};

export default ToDo;
