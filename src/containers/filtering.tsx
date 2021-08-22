import React, { useState } from "react";
import { Filtering } from "../components";

interface DataProps {
  data: any;
  setData: any;
}

export function FilteringContainer({ setData, data }: DataProps) {
  // console.log("Filtering Data: ", data);
  const [filteredJob, setFilteredJob] = useState("");

  const filterJob = (e: any) => {
    console.log(e.target.value);
    let userInput = e.target.value;
    setFilteredJob(e.target.value);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].JobTitle.toString().trim().toLowerCase());
      console.log(data[i].AppId.toString().trim().toLowerCase());
      let filteredData = data.filter((app: any) =>
        app.JobTitle.toString()
          .trim()
          .toLowerCase()
          .includes(userInput.toString().trim().toLowerCase())
      );
      console.log("Filtered Data: ", filteredData);
    }
  };

  return (
    <Filtering>
      <Filtering.Search
        value={filteredJob}
        onChange={(e: any) => filterJob(e)}
        name="Job Title/ID"
      />
      <Filtering.Search name="Company Name" />
      <Filtering.Search name="Date Completed" />
      <Filtering.NoSearch name="Status" />
      <Filtering.NoSearch name="Interview" />
      <Filtering.NoSearch name="Result" />
      <Filtering.NoFilter name="Notes" />
    </Filtering>
  );
}
