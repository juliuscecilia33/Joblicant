import React, { useState } from "react";
import { CalendarDashboard } from "../components";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles, Theme, createStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { indigo, blue, teal } from "@material-ui/core/colors";

interface ViewProps {
  currentViewName: any;
  onChange: any;
}

interface DataProps {
  originalData: any;
  setOriginalData: any;
}

export function CalendarContainer({
  originalData,
  setOriginalData,
}: DataProps) {
  const [currentViewName, setCurrentViewName] = useState("Month");

  const schedulerData: any = [];
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

  const [data, setData] = useState(schedulerData);

  const ExternalViewSwitcher = ({ currentViewName, onChange }: ViewProps) => (
    <RadioGroup
      aria-label="Views"
      style={{ flexDirection: "row" }}
      name="views"
      value={currentViewName}
      onChange={onChange}
    >
      <FormControlLabel value="Week" control={<Radio />} label="Week" />
      <FormControlLabel
        value="Work Week"
        control={<Radio />}
        label="Work Week"
      />
      <FormControlLabel value="Month" control={<Radio />} label="Month" />
    </RadioGroup>
  );

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

  return (
    <>
      <CalendarDashboard>
        <Paper>
          <Scheduler data={data} height={660}>
            <ViewState
              defaultCurrentDate="2021-08-01"
              currentViewName={currentViewName}
            />
            <WeekView startDayHour={10} endDayHour={19} />
            <WeekView
              name="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />

            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <div style={{ paddingLeft: "1.4rem", paddingTop: "1rem" }}>
              <ExternalViewSwitcher
                currentViewName={currentViewName}
                onChange={(e: any) => setCurrentViewName(e.target.value)}
              />
            </div>
            <Appointments />
          </Scheduler>
        </Paper>
      </CalendarDashboard>
    </>
  );
}
