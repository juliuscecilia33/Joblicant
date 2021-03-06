import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { blue } from "@material-ui/core/colors";
import { Application } from "../components";
import { DetailsContainer } from "./details";
import axios from "axios";

interface DataProps {
  index: number;
  info: any;
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  info: any;
  setOpen: any;
  setOpenDetails: any;
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "#2A2F45",
    color: "#50e3c2",
  },
  popup: {
    padding: "1rem",
    backgroundColor: "#30364F",
    color: "#ffffff",
    border: "0.3px solid #50e3c2",
  },
});

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();

  const { onClose, selectedValue, open, info, setOpen, setOpenDetails } = props;
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const handleClose = () => {
    onClose(selectedValue);
  };

  const editApplication = () => {
    setOpenDetails(true);
    setOpen(false);
  };

  const deleteApplication = () => {

    axios
      .delete("http://127.0.0.1:8000/application/" + info.AppId)
      .then((response) => {
        console.log(response);
        setOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("There was an error!", error);
      });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div className={classes.popup}>
        <DialogTitle id="simple-dialog-title">Actions</DialogTitle>
        <List>
          <ListItem button onClick={() => editApplication()}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Edit" />
          </ListItem>
          <ListItem button onClick={() => deleteApplication()}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <DeleteSweepIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
}

export function ApplicationContainer({ index, info }: DataProps) {
  const [openDetails, setOpenDetails] = useState<boolean | undefined>(false);

  // 2021-07-11
  const FormatDate = (d: any) => {
    let year = d.substring(0, 4);
    let month = d.substring(5, 7);
    let date = d.substring(8);

    let dateStr = month + "/" + date + "/" + year;
    return dateStr;
  };

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Edit");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Application>
        <Application.SearchIDField id={index + 1}>
          {info.JobTitle}
        </Application.SearchIDField>
        <Application.SearchField>{info.CompanyName}</Application.SearchField>
        <Application.SearchField>
          {FormatDate(info.DateCompleted)}
        </Application.SearchField>
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
          {info.InterviewDate === null
            ? info.Status
            : FormatDate(info.InterviewDate)}
        </Application.NoSearchField>
        <Application.NoSearchResult
          rejected={info.Result === "Rejected" ? true : false}
          accepted={info.Result === "Accepted" ? true : false}
        >
          {info.Result === null ? info.Status : info.Result}
        </Application.NoSearchResult>
        <Application.NoFilterField>{info.Notes}</Application.NoFilterField>
        <Application.Actions
          handleClickOpen={handleClickOpen}
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
        <SimpleDialog
          selectedValue={selectedValue}
          setOpenDetails={setOpenDetails}
          open={open}
          setOpen={setOpen}
          onClose={handleClose}
          info={info}
        />
      </Application>
      {openDetails && (
        <DetailsContainer
          setOpenDetails={setOpenDetails}
          openDetails={openDetails}
          info={info}
        />
      )}
    </>
  );
}
