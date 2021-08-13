import React, { useState } from "react";
import { Dashboard } from "../components";
import { FilteringContainer, ApplicationContainer } from "../containers";
import { DetailsContainer } from "./details";
import { EmptyContainer } from "./empty";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib

interface DataProps {
  data: any;
}

export function DashboardContainer({ data }: DataProps) {
  console.log(data.length);
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Dashboard>
      <FilteringContainer />
      {data.length === 0 ? (
        <EmptyContainer />
      ) : (
        data.map((info: any, index: any) => (
          <ApplicationContainer index={index} info={info} />
        ))
      )}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
    </Dashboard>
  );
}
