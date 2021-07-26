import React, { useState } from "react";
import { Navbar } from "../components";

export function NavbarContainer() {
  const [applications, setApplications] = useState(true);
  const [calendar, setCalendar] = useState(false);
  const [information, setInformation] = useState(false);

  return (
    <Navbar>
      <Navbar.Logo />
      <Navbar.Tabs>
        <Navbar.Tab
          active={applications}
          name="Applications"
          icon="fas fa-feather-alt"
          onClick={() => {
            setApplications(true);
            setCalendar(false);
            setInformation(false);
          }}
        />
        <Navbar.Tab
          active={calendar}
          name="Calendar"
          icon="fas fa-calendar-week"
          onClick={() => {
            setApplications(false);
            setCalendar(true);
            setInformation(false);
          }}
        />
        <Navbar.Tab
          active={information}
          name="Information"
          icon="fas fa-spell-check"
          onClick={() => {
            setApplications(false);
            setCalendar(false);
            setInformation(true);
          }}
        />
      </Navbar.Tabs>
    </Navbar>
  );
}
