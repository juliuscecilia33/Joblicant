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
  const [filteredCompany, setFilteredCompany] = useState("");

  const resetData = () => {
    setData(originalData);
    setFilteredCompany("");
    setFilteredJob("");
  };

  const filterJob = (e: any) => {
    console.log(e.target.value);
    setFilteredCompany("");
    setFilteredJob(e.target.value);
    // setData(originalData);
    let filteredData;

    for (let i = 0; i < originalData.length; i++) {
      if (e.target.value.trim() === "") {
        console.log("Empty");
        console.log("Original Data: ", originalData);
        setData(originalData);
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

  const filterCompany = (e: any) => {
    console.log(e.target.value);
    setFilteredJob("");
    setFilteredCompany(e.target.value);
    // setData(originalData);
    let filteredData;

    for (let i = 0; i < originalData.length; i++) {
      if (e.target.value.trim() === "") {
        console.log("Empty");
        console.log("Original Data: ", originalData);
        setData(originalData);
      } else {
        filteredData = data.filter((app: any) =>
          app.CompanyName.toString()
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
        onClick={() => {
          setFilteredJob("");
          setData(originalData);
        }}
        name="Job Title"
        onFocus={() => resetData()}
      />
      <Filtering.Search
        name="Company Name"
        value={filteredCompany}
        onChange={(e: any) => filterCompany(e)}
        onClick={() => {
          setFilteredCompany("");
          setData(originalData);
        }}
        onFocus={() => resetData()}
      />
      <Filtering.Search name="Date Completed" />
      <Filtering.NoSearch name="Status" />
      <Filtering.NoSearch name="Interview" />
      <Filtering.NoSearch name="Result" />
      <Filtering.NoFilter name="Notes" />
    </Filtering>
  );
}
