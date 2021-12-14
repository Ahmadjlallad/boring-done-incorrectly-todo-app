import React from "react";
import ToDo from "./components/todo/todo";
import Settings from "./context/Settings";
import LoginContext from "./context/AuthContext.jsx";
import "./app.scss";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "./components/todo/settings";
import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'
import Auth from "./components/auth/Auth";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <LoginContext>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Auth>
                  <Settings>
                    <ToDo />
                  </Settings>
                </Auth>
              }
            />
            <Route
              path="/settings"
              element={
                <Auth>
                  <Settings>
                    <SettingsPage />
                  </Settings>
                </Auth>
              }
            />
          </Routes>
        </LoginContext>
      </BrowserRouter>
    );
  }
}
