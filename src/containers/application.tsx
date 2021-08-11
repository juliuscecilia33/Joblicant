import React, { useState } from "react";
import { Application } from "../components";
import { DetailsContainer } from "./details";

interface DataProps {
  index: number;
  info: any;
}

export function ApplicationContainer({ index, info }: DataProps) {
  const [openDetails, setOpenDetails] = useState<boolean | undefined>(false);

  console.log(openDetails);
  // console.log(info);

  return (
    <>
      <Application>
        <Application.SearchIDField id={index + 1}>
          {info.JobTitle}
        </Application.SearchIDField>
        <Application.SearchField>{info.CompanyName}</Application.SearchField>
        <Application.SearchField>{info.DateCompleted}</Application.SearchField>
        <Application.NoSearchField
          sent={info.Status === "Sent" ? true : false}
          rejected={info.Status === "Rejected" ? true : false}
          processing={
            info.Status === "Online Assessment" ||
            "Interview[1]" ||
            "Interview[2]" ||
            "Interview[3]"
              ? true
              : false
          }
          accepted={info.Status === "Accepted" ? true : false}
        >
          {info.Status}
        </Application.NoSearchField>
        <Application.NoSearchField
          sent={info.Status === "Sent" ? true : false}
          rejected={info.Status === "Rejected" ? true : false}
          processing={
            info.Status === "Online Assessment" ||
            "Interview[1]" ||
            "Interview[2]" ||
            "Interview[3]"
              ? true
              : false
          }
          accepted={info.Status === "Accepted" ? true : false}
        >
          {info.InterviewDate === null ? info.Status : info.InterviewDate}
        </Application.NoSearchField>
        <Application.NoSearchResult
          rejected={info.Result === "Rejected" ? true : false}
          accepted={info.Result === "Accepted" ? true : false}
        >
          {info.Result === null ? info.Status : info.Result}
        </Application.NoSearchResult>
        <Application.NoFilterField>
          Hello these are my notes
        </Application.NoFilterField>
        <Application.Actions
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      </Application>
      {openDetails && <DetailsContainer info={info} />}
    </>
  );
}
