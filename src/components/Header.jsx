import { Alignment, Navbar } from "@blueprintjs/core";
import React from "react";
import { Else, If, Then } from "react-if";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import Sign from "./auth/Sign";

function Header() {
  const [newUser, createNewUser] = React.useState(true);
  return (
    <Navbar
      className="bp3-navbar"
      style={{ height: "4rem", backgroundColor: "#227BFF" }}
      align={Alignment.LEFT}
    >
      <Navbar.Heading
        className="bp3-navbar-group bp3-align-left"
        style={{ fontSize: "1.5rem" }}
      >
        <Link style={{ color: "#fff" }} to="/">
          home
        </Link>
      </Navbar.Heading>
      <Navbar.Heading
        className="bp3-navbar-group bp3-align-left"
        style={{ fontSize: "1.5rem" }}
      >
        <Link style={{ color: "#fff" }} to="/settings">
          settings
        </Link>
      </Navbar.Heading>
      <Navbar.Heading
        className="bp3-navbar-group bp3-align-right"
        style={{ color: "#fff", alignItems: "baseline" }}
      >
        <If condition={newUser}>
          <Then>
            <Login createNewUser={createNewUser} />
          </Then>
          <Else>
            <Sign createNewUser={createNewUser} />
          </Else>
        </If>
      </Navbar.Heading>
    </Navbar>
  );
}

export default Header;
