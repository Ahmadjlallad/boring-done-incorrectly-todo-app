import { Alignment, Navbar } from "@blueprintjs/core";
import React from "react";

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
        home
      </Navbar.Heading>
    </Navbar>
  );
}

export default Header;
