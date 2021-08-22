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
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/application/").then((response) => {
      setOriginalData(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <NavbarContainer />
        <DashboardContainer
          originalData={originalData}
          setOriginalData={setOriginalData}
          data={data}
          setData={setData}
        />
      </DataContext.Provider>
    </>
  );
}

export default App;
