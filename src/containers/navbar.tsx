import React, { useState } from "react";
import { Navbar } from "../components";

interface SetProps {
  setApplications: any;
  applications: any;
  calendar: any;
  setCalendar: any;
  information: any;
  setInformation: any;
}

export function NavbarContainer({
  setApplications,
  applications,
  calendar,
  setCalendar,
  information,
  setInformation,
}: SetProps) {
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
