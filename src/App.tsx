import React, { useEffect, useState } from "react";
import {
  NavbarContainer,
  CreateContainer,
  DashboardContainer,
} from "./containers";
import { DataContext } from "./context/data";
import axios from "axios";

function App() {
  // AppId: 1;
  // CompanyName: "Microsoft";
  // DateCompleted: "2021-07-15";
  // InterviewDate: null;
  // JobTitle: "Explore Intern";
  // Result: null;
  // Status: "Sent";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/application/").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <NavbarContainer />
        <DashboardContainer data={data} setData={setData} />
      </DataContext.Provider>
    </>
  );
}

export default App;
