import React from "react";
import { Navbar } from "../components";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Logo />
      <Navbar.Tabs>
        <Navbar.Tab
          active={true}
          name="Applications"
          icon="fas fa-feather-alt"
        />
        <Navbar.Tab
          active={false}
          name="Calendar"
          icon="fas fa-calendar-week"
        />
        <Navbar.Tab
          active={false}
          name="Information"
          icon="fas fa-spell-check"
        />
      </Navbar.Tabs>
    </Navbar>
  );
}
