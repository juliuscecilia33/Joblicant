import React, { useState, useEffect } from "react";
import { Filtering } from "../components";
import axios from "axios";

interface DataProps {
  data: any;
  setData: any;
  originalData: any;
  setOriginalData: any;
}

export function FilteringContainer({
  originalData,
  setOriginalData,
  setData,
  data,
}: DataProps) {
  // console.log("Filtering Data: ", data);
  const [filteredJob, setFilteredJob] = useState("");

  const filterJob = (e: any) => {
    console.log(e.target.value);
    setFilteredJob(e.target.value);

    if (e.target.value.trim() === "") {
      console.log("Empty");
      console.log("Original Data: ", originalData);
      setData(originalData);
    } else {
      let filteredData = data.filter((app: any) =>
        app.JobTitle.toString()
          .trim()
          .toLowerCase()
          .includes(filteredJob.toString().trim().toLowerCase())
      );
      console.log("Filtered Data: ", filteredData);
      setData(filteredData);
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
