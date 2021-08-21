import React, { useState, useEffect, useContext } from "react";
import { Details } from "../components";
import axios from "axios";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib=
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface DataProps {
  info: any;
  openDetails: boolean;
  setOpenDetails: any;
}

export function DetailsContainer({
  setOpenDetails,
  info,
  openDetails,
}: DataProps) {
  const [deleted, setDeleted] = useState<boolean | undefined>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [jobTitle, setJobTitle] = useState<string | undefined>(info.JobTitle);
  const [companyName, setCompanyName] = useState<string | undefined>(
    info.CompanyName
  );
  const [notes, setNotes] = useState<string | undefined>(info.Notes);
  const [status, setStatus] = useState(info.Status);
  const [result, setResult] = useState(info.Result);
  const [selectedDate, handleDateChange] = useState(
    new Date(info.DateCompleted)
  );
  const [interviewDate, handleInterviewDateChange] = useState(
    new Date(info.InterviewDate)
  );

  const handleSave = (information: any) => {

    const appbody = {
      AppId: information.AppId,
      JobTitle: jobTitle,
      CompanyName: companyName,
      DateCompleted: FormatFormalDate(selectedDate),
      Status: status,
      InterviewDate: FormatFormalDate(interviewDate),
      Result: result,
      Notes: notes,
    };

    axios
      .put("http://127.0.0.1:8000/application/", appbody)
      .then((response) => {
        console.log(response);
        setOpenDetails(false);
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("There was an error!", error);
      });
  };

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleResultChange = (event: any) => {
    setResult(event.target.value);
  };

  const DeleteApplication = (information: any) => {
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

  return (
    <Details>
      <Details.Row>
        <Details.MdField
          setValue={setJobTitle}
          value={jobTitle}
          name="Job Title"
        />
        <Details.MdField
          setValue={setCompanyName}
          value={companyName}
          name="Company Name"
        />
        <Details.MdFieldContainer>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
          <Details.SmMdField
            value={FormatDate(selectedDate)}
            onChange={handleDateChange}
            icon="fas fa-calendar-week"
            name="Date Completed"
          />
        </Details.MdFieldContainer>
        <Details.DropdownFieldContainer>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatusChange}
            >
              <MenuItem value={"Sent"}>Sent</MenuItem>
              <MenuItem value={"Online Assessment"}>Online Assessment</MenuItem>
              <MenuItem value={"Interview[1]"}>Interview[1]</MenuItem>
              <MenuItem value={"Interview[2]"}>Interview[2]</MenuItem>
              <MenuItem value={"Interview[3]"}>Interview[3]</MenuItem>
            </Select>
          </FormControl>
          <Details.SmField
            value={status}
            onChange={handleStatusChange}
            name="Status"
            icon="fas fa-chevron-down"
          />
        </Details.DropdownFieldContainer>
        <Details.FieldContainer>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              value={interviewDate}
              onChange={handleInterviewDateChange}
            />
          </MuiPickersUtilsProvider>
          <Details.SmField
            value={FormatDate(interviewDate)}
            onChange={handleDateChange}
            name="Interview Date"
            icon="fas fa-calendar-week"
          />
        </Details.FieldContainer>
        <Details.DropdownFieldContainer>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={result}
              onChange={handleResultChange}
            >
              <MenuItem value={"Accepted"}>Accepted</MenuItem>
              <MenuItem value={"Rejected"}>Rejected</MenuItem>
            </Select>
          </FormControl>
          <Details.SmField
            value={result}
            onChange={handleResultChange}
            name="Result"
            icon="fas fa-chevron-down"
          />
        </Details.DropdownFieldContainer>
      </Details.Row>
      <Details.BottomRow>
        <Details.LgField setValue={setNotes} value={notes} name="Notes" />
        <Details.Actions>
          <Details.Cancel onClick={() => setOpenDetails(false)} />
          <Details.Action
            action="Delete"
            icon="fas fa-trash"
            background="linear-gradient(136.67deg, #FF404B 8.34%, #EF389B 95.26%)"
            onClick={() => DeleteApplication(info)}
          />
          <Details.Action
            onClick={() => handleSave(info)}
            action="Save"
            icon="fas fa-check"
            background="linear-gradient(242.46deg, #16B4EB 9.2%, #50E3C2 89.53%)"
          />
        </Details.Actions>
      </Details.BottomRow>
    </Details>
  );
}
