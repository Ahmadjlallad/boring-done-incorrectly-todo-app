import { Alignment, Navbar } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
    </Navbar>
  );
}

export default Header;
