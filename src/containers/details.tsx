import React, { useState, useEffect, useContext } from "react";
import { Details } from "../components";
import axios from "axios";
import { DataContext } from "../context/data";

interface DataProps {
  info: any;
}

export function DetailsContainer({ info }: DataProps) {
  const [deleted, setDeleted] = useState<boolean | undefined>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  useEffect(() => {}, []);

  const DeleteApplication = (information: any) => {
    // console.log(information);
    axios
      .delete("http://127.0.0.1:8000/application/" + information.AppId)
      .then((response) => {
        console.log(response);
        setDeleted(true);
        window.location.reload();
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
            onClick={() => DeleteApplication(info)}
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
