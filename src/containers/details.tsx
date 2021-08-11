import React, { useState } from "react";
import { Details } from "../components";
import axios from "axios";

interface DataProps {
  info: any;
}

export function DetailsContainer({ info }: DataProps) {
  const [deleted, setDeleted] = useState<boolean | undefined>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  console.log("Details: ");
  console.log(info);

  const DeleteApplication = () => {
    axios
      .delete("http://127.0.0.1:8000/application/" + info.AppId)
      .then((response) => {
        console.log(response);
        setDeleted(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("There was an error!", error);
      });
  };

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
      <Details.BottomRow>
        <Details.LgField name="Notes" />
        <Details.Actions>
          <Details.Action
            action="Delete"
            icon="fas fa-trash"
            background="linear-gradient(136.67deg, #FF404B 8.34%, #EF389B 95.26%)"
            onClick={() => DeleteApplication()}
          />
          <Details.Action
            action="Save"
            icon="fas fa-check"
            background="linear-gradient(242.46deg, #16B4EB 9.2%, #50E3C2 89.53%)"
          />
        </Details.Actions>
      </Details.BottomRow>
    </Details>
  );
}
