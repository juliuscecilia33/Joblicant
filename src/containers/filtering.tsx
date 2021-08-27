import React, { useState, useEffect } from "react";
import { Filtering } from "../components";
import axios from "axios";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib=
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  const [filteredDate, handleFilteredDateChange] = useState(new Date());

  const FormatDate = (d: any) => {
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let dateStr = month + "/" + date + "/" + year;
    return dateStr;
  };

  const FormatFormalDate = (d: any) => {
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    if (month <= 9) {
      month = "0" + month;
    }
    if (date <= 9) {
      date = "0" + date;
    }
    let dateStr = year + "-" + month + "-" + date;
    return dateStr;
  };

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

  useEffect(() => {
    setData(originalData);
    let filteredData;
    console.log("Filtered Date: ", filteredDate);
    filteredData = data.filter((app: any) =>
      app.DateCompleted.includes(FormatFormalDate(filteredDate))
    );
    console.log("FILTERED DATA: ", filteredData);
    setData(filteredData);
  }, [filteredDate]);

  const filterDate = () => {
    let filteredData;
    console.log("Filtered Date: ", filteredDate);
    // filteredData = data.filter((app: any) =>
    //   app.DateCompleted
    //     .includes()
    // );
    // console.log("Filtered Data text: ", filteredData);
    // setData(filteredData);
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
      <Filtering.DateFilterContainer>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            value={filteredDate}
            onChange={handleFilteredDateChange}
          />
        </MuiPickersUtilsProvider>
        <Filtering.DateSearch
          name="Date Completed"
          value={FormatDate(filteredDate)}
          onChange={handleFilteredDateChange}
          onClick={() => {
            setData(originalData);
          }}
          onFocus={() => resetData()}
        />
      </Filtering.DateFilterContainer>
      <Filtering.NoSearch name="Status" />
      <Filtering.NoSearch name="Interview" />
      <Filtering.NoSearch name="Result" />
      <Filtering.NoFilter name="Notes" />
    </Filtering>
  );
}
