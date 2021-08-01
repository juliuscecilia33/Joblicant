import React, { useState } from "react";
import { Application } from "../components";

export function ApplicationContainer() {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <Application>
      <Application.SearchIDField id="1">
        SWE Internship
      </Application.SearchIDField>
      <Application.SearchField>Google</Application.SearchField>
      <Application.SearchField>June 22, 2021</Application.SearchField>
      <Application.NoSearchField>Sent</Application.NoSearchField>
      <Application.NoSearchField>Sent</Application.NoSearchField>
      <Application.NoSearchField>Sent</Application.NoSearchField>
      <Application.NoFilterField>
        Hello these are my notes
      </Application.NoFilterField>
      <Application.Actions />
    </Application>
  );
}
