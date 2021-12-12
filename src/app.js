import React from "react";
import ToDo from "./components/todo/todo";
import Settings from "./context/Settings";
import "./app.scss";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <Settings>
        <Header />
        <ToDo />
      </Settings>
    );
  }
}
