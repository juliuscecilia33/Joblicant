import React from "react";
import { Details } from "../components";

export function DetailsContainer() {
  return (
    <Details>
      <Details.Row>
        <Details.MdField name="Job Title" />
        <Details.MdField name="Company Name" />
        <Details.MdField name="Date Completed" />
        <Details.SmField name="Status" icon="" />
        <Details.SmField name="Interview Date" icon="fas fa-calendar-week" />
        <Details.SmField name="Result" icon="fas fa-chevron-down" />
      </Details.Row>
      <Details.Row>
        <Details.Actions>
          <Details.LgField name="Notes" />
          <Details.Action
            action="Delete"
            icon="fas fa-trash"
            background="linear-gradient(136.67deg, #FF404B 8.34%, #EF389B 95.26%)"
          />
          <Details.Action
            action="Save"
            icon="fas fa-check"
            background="linear-gradient(242.46deg, #16B4EB 9.2%, #50E3C2 89.53%)"
          />
        </Details.Actions>
      </Details.Row>
    </Details>
  );
}
