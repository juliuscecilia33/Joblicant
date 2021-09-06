import React, { useState } from "react";
import { CalendarDashboard } from "../components";
import Paper from "@material-ui/core/Paper";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  Resources,
  Toolbar,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles, Theme, createStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { indigo, blue, teal, red, green } from "@material-ui/core/colors";
import { WithStyles } from "@material-ui/styles";
import classNames from "clsx";

interface ViewProps {
  currentViewName: any;
  onChange: any;
}

interface DataProps {
  originalData: any;
  setOriginalData: any;
}

// title: 'Prepare 2015 Marketing Plan',
// startDate: new Date(2018, 5, 25, 13, 0),
// endDate: new Date(2018, 5, 25, 13, 30),
// priority: 2,
// location: 'Room 3',

export function CalendarContainer({
  originalData,
  setOriginalData,
}: DataProps) {
  const [currentViewName, setCurrentViewName] = useState("Month");
  const calendarData: any = [];

  originalData.map((info: any, index: Number) => {
    let information = {
      title: info.JobTitle + ": " + info.CompanyName,
      startDate: info.DateCompleted,
      endDate: info.InterviewDate,
      status: info.Status,
      result: info.Result,
    };
    calendarData.push(information);
  });

  console.log("calendar data: ", calendarData);

  const [data, setData] = useState(calendarData);

  const resources = [
    {
      fieldName: "status",
      title: "Status",
      instances: [
        { id: "Sent", text: "Sent", color: indigo },
        { id: "Online Assessment", text: "Online Assessment", color: blue },
        { id: "Interview[1]", text: "Interview[1]", color: teal },
        { id: "Interview[2]", text: "Interview[2]", color: indigo },
        { id: "Interview[3]", text: "Interview[3]", color: green },
      ],
    },
    {
      fieldName: "result",
      title: "Result",
      instances: [
        { id: "Accepted", text: "Accepted", color: teal },
        { id: "Rejected", text: "Rejected", color: red },
      ],
    },
  ];

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const styles = ({ palette }: Theme) =>
    createStyles({
      appointment: {
        borderRadius: 0,
        borderBottom: 0,
      },
      highPriorityAppointment: {
        borderLeft: `4px solid ${teal[500]}`,
      },
      mediumPriorityAppointment: {
        borderLeft: `4px solid ${blue[500]}`,
      },
      lowPriorityAppointment: {
        borderLeft: `4px solid ${indigo[500]}`,
      },
      weekEndCell: {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
        "&:hover": {
          backgroundColor: fade(palette.action.disabledBackground, 0.04),
        },
        "&:focus": {
          backgroundColor: fade(palette.action.disabledBackground, 0.04),
        },
      },
      weekEndDayScaleCell: {
        backgroundColor: fade(palette.action.disabledBackground, 0.06),
      },
      text: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      content: {
        opacity: 0.7,
      },
      container: {
        width: "100%",
        lineHeight: 1.2,
        height: "100%",
      },
    });

  const Appointment = withStyles(styles)(
    ({ classes, data, ...restProps }: AppointmentProps) => (
      <Appointments.Appointment
        {...restProps}
        className={classNames({
          [classes.highPriorityAppointment]: data.status === "Interview[3]",
          [classes.mediumPriorityAppointment]: data.status === "Interview[2]",
          [classes.lowPriorityAppointment]: data.status === "Interview[1]",
          [classes.appointment]: true,
        })}
        data={data}
      />
    )
  );

  const AppointmentContent = withStyles(styles, {
    name: "AppointmentContent",
  })(({ classes, data, ...restProps }: AppointmentContentProps) => {
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>{data.title}</div>
          <div className={classNames(classes.text, classes.content)}>
            {`Status: ${data.status}`}
          </div>
          <div className={classNames(classes.text, classes.content)}>
            {`Result: ${data.result}`}
          </div>
        </div>
      </Appointments.AppointmentContent>
    );
  });

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

  type AppointmentProps = Appointments.AppointmentProps &
    WithStyles<typeof styles>;
  type AppointmentContentProps = Appointments.AppointmentContentProps &
    WithStyles<typeof styles>;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* <CssBaseline /> */}

        <CalendarDashboard>
          <Paper>
            <Scheduler data={data} height={730}>
              <ViewState
                defaultCurrentDate={FormatFormalDate(new Date())}
                currentViewName={currentViewName}
              />

              <MonthView />
              <Toolbar />
              <DateNavigator />
              <TodayButton />
              <Appointments
                appointmentComponent={Appointment}
                appointmentContentComponent={AppointmentContent}
              />
              <AppointmentTooltip showCloseButton />
              <Resources data={resources} />
            </Scheduler>
          </Paper>
        </CalendarDashboard>
      </ThemeProvider>
    </>
  );
}
