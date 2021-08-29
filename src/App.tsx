import React, { useEffect, useState } from "react";
import {
  NavbarContainer,
  DashboardContainer,
  CalendarContainer,
} from "./containers";
import { DataContext } from "./context/data";
import axios from "axios";
import { Dashboard } from "./components";

function App() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [applications, setApplications] = useState(true);
  const [calendar, setCalendar] = useState(false);
  const [information, setInformation] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/application/").then((response) => {
      setOriginalData(response.data);
      setData(response.data);
    });
  }, [setApplications, applications]);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <NavbarContainer
          setApplications={setApplications}
          applications={applications}
          calendar={calendar}
          setCalendar={setCalendar}
          information={information}
          setInformation={setInformation}
        />
        {applications ? (
          <DashboardContainer
            originalData={originalData}
            setOriginalData={setOriginalData}
            data={data}
            setData={setData}
          />
        ) : calendar ? (
          <CalendarContainer />
        ) : information ? (
          <Dashboard />
        ) : (
          <Dashboard />
        )}
      </DataContext.Provider>
    </>
  );
}

export default App;
