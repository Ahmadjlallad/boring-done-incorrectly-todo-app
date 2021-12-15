import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import "./todo.scss";
import { v4 as uuid } from "uuid";
import List from "./todo-component/List";
import { Alignment, Navbar } from "@blueprintjs/core";
import TodoForm from "./todo-component/TodoForm.jsx";
import Auth from "../auth/Auth.jsx";
import todoApi from "../../api/todoApi.js";
import { authContext as ac } from "../../context/AuthContext.jsx";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [range, setRange] = useState(3);
  const { handleChange, handleSubmit } = useForm(addItem);

  async function addItem(item) {
    item.id = uuid() + new Date().getTime();
    item.complete = false;
    item.difficulty = item.difficulty ? item.difficulty : range;
    await todoApi.post("/todo", item);
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
  const todoFormProps = {
    handleChange,
    handleSubmit,
    range,
    setRange,
  };
  const authContext = React.useContext(ac);
  useEffect(() => {
    (async () => {
      console.log(authContext.token);
      try {
        const listItem = await todoApi.get(
          "/todo",
          {},
          {
            Headers: {
              Authorization: `bearer ${authContext.token}`,
            },
          }
        );
        console.log(listItem);
        setList(listItem);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
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
          <Auth capability="create">
            <TodoForm {...todoFormProps} />
          </Auth>
        </div>
        <div className="todo-list">
          <List
            list={list}
            toggleComplete={toggleComplete}
            setIncomplete={setIncomplete}
            incomplete={incomplete}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </>
  );
};

export default ToDo;
