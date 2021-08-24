import React, { useState, useEffect } from "react";
import { Filtering } from "../components";
import axios from "axios";

interface DataProps {
  data: any;
  setData: any;
  originalData: any;
  setOriginalData: any;
  idData: any;
  setIdData: any;
}

export function FilteringContainer({
  originalData,
  setOriginalData,
  setData,
  data,
  idData,
  setIdData,
}: DataProps) {
  // console.log("Filtering Data: ", data);
  const [filteredJob, setFilteredJob] = useState("");

  const filterJob = (e: any) => {
    console.log(e.target.value);
    setFilteredJob(e.target.value);
    // setData(originalData);
    let filteredData;

    for (let i = 0; i < originalData.length; i++) {
      if (e.target.value.trim() === "") {
        console.log("Empty");
        console.log("Original Data: ", originalData);
        setData(originalData);
      } else if (
        e.target.value.toString().trim() === originalData[i].AppId.toString()
      ) {
        console.log("JobID: ", originalData[i].AppId.toString());
        filteredData = data[i];
        setIdData(filteredData);
      } else {
        filteredData = data.filter((app: any) =>
          app.JobTitle.toString()
            .trim()
            .toLowerCase()
            .includes(e.target.value.toString().trim().toLowerCase())
        );
        console.log("Filtered Data text: ", filteredData);
        setData(filteredData);
      }
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
