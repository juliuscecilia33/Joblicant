import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { blue } from "@material-ui/core/colors";
import { Application } from "../components";
import { DetailsContainer } from "./details";

interface DataProps {
  index: number;
  info: any;
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  popup: {
    padding: "1rem",
  },
});

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const editApplication = () => {
    console.log("Editing Application");
  };

  const deleteApplication = () => {
    console.log("Deleteing Application");
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
          <ListItem button onClick={() => deleteApplication()}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Edit" />
          </ListItem>
          <ListItem button onClick={() => editApplication()}>
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
          open={open}
          onClose={handleClose}
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
