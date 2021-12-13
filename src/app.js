import React from "react";
import ToDo from "./components/todo/todo";
import Settings from "./context/Settings";
import "./app.scss";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "./components/todo/settings";
import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Settings>
                <ToDo />
              </Settings>
            }
          />
          <Route
            path="/settings"
            element={
              <Settings>
                <SettingsPage />
              </Settings>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
