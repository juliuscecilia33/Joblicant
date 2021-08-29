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
} from "@devexpress/dx-react-scheduler-material-ui";

interface DataProps {
  currentViewName: any;
  onChange: any;
}

const schedulerData = [
  {
    startDate: "2021-08-01T09:45",
    endDate: "2021-08-01T11:00",
    title: "Amazon",
  },
  {
    startDate: "2021-08-01T12:00",
    endDate: "2021-08-01T13:30",
    title: "Google",
  },
];

const ExternalViewSwitcher = ({ currentViewName, onChange }: DataProps) => (
  <RadioGroup
    aria-label="Views"
    style={{ flexDirection: "row" }}
    name="views"
    value={currentViewName}
    onChange={onChange}
  >
    <FormControlLabel value="Week" control={<Radio />} label="Week" />
    <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" />
    <FormControlLabel value="Month" control={<Radio />} label="Month" />
  </RadioGroup>
);

export function CalendarContainer({}) {
  const [data, setData] = useState(schedulerData);
  const [currentViewName, setCurrentViewName] = useState("Month");

  return (
    <>
      <CalendarDashboard>
        <ExternalViewSwitcher
          currentViewName={currentViewName}
          onChange={(e: any) => setCurrentViewName(e.target.value)}
        />

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

            <Appointments />
          </Scheduler>
        </Paper>
      </CalendarDashboard>
    </>
  );
}
