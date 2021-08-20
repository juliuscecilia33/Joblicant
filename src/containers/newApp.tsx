import React, { useState } from "react";
import { NewApp } from "../components";
import axios from "axios";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib=
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface DataProps {
  openDetails: boolean;
  setOpenDetails: any;
}

export function NewAppContainer({ setOpenDetails, openDetails }: DataProps) {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [jobTitle, setJobTitle] = useState<string | undefined>("");
  const [companyName, setCompanyName] = useState<string | undefined>("");
  const [notes, setNotes] = useState<string | undefined>("");
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
  const [interviewDate, handleInterviewDateChange] = useState(new Date());

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleResultChange = (event: any) => {
    setResult(event.target.value);
  };

  const handlePost = () => {
    console.log("Application Created");

    const appbody = {
      JobTitle: jobTitle,
      CompanyName: companyName,
      DateCompleted: FormatFormalDate(selectedDate),
      Status: status,
      InterviewDate: FormatFormalDate(interviewDate),
      Result: result,
      Notes: notes,
    };

    axios
      .post("http://127.0.0.1:8000/application/", appbody)
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
    <NewApp>
      <NewApp.Row>
        <NewApp.MdField
          setValue={setJobTitle}
          value={jobTitle}
          name="Job Title"
        />
        <NewApp.MdField
          setValue={setCompanyName}
          value={companyName}
          name="Company Name"
        />
        <NewApp.MdFieldContainer>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
          <NewApp.SmMdField
            value={FormatDate(selectedDate)}
            onChange={handleDateChange}
            icon="fas fa-calendar-week"
            name="Date Completed"
          />
        </NewApp.MdFieldContainer>
        <NewApp.DropdownFieldContainer>
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
          <NewApp.SmField
            value={status}
            onChange={handleStatusChange}
            name="Status"
            icon="fas fa-chevron-down"
          />
        </NewApp.DropdownFieldContainer>
        <NewApp.FieldContainer>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              value={interviewDate}
              onChange={handleInterviewDateChange}
            />
          </MuiPickersUtilsProvider>
          <NewApp.SmField
            value={FormatDate(interviewDate)}
            onChange={handleDateChange}
            name="Interview Date"
            icon="fas fa-calendar-week"
          />
        </NewApp.FieldContainer>
        <NewApp.DropdownFieldContainer>
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
          <NewApp.SmField
            value={result}
            onChange={handleResultChange}
            name="Result"
            icon="fas fa-chevron-down"
          />
        </NewApp.DropdownFieldContainer>
      </NewApp.Row>
      <NewApp.BottomRow>
        <NewApp.LgField setValue={setNotes} value={notes} name="Notes" />
        <NewApp.Actions>
          <NewApp.Action
            action="Cancel"
            icon="fas fa-strikethrough"
            background="linear-gradient(136.67deg, #FF404B 8.34%, #EF389B 95.26%)"
            onClick={() => setOpenDetails(false)}
          />
          <NewApp.Action
            onClick={() => handlePost()}
            action="Create"
            icon="fas fa-feather-alt"
            background="linear-gradient(242.46deg, #16B4EB 9.2%, #50E3C2 89.53%)"
          />
        </NewApp.Actions>
      </NewApp.BottomRow>
    </NewApp>
  );
}
