import React from "react";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";

function TodoForm({ handleChange, handleSubmit, range, setRange }) {
  return (
    <div>
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
  );
}

export default TodoForm;
