import React, { useEffect, useState } from "react";
import {
  NavbarContainer,
  CreateContainer,
  DashboardContainer,
} from "./containers";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  // AppId: 1;
  // CompanyName: "Microsoft";
  // DateCompleted: "2021-07-15";
  // InterviewDate: null;
  // JobTitle: "Explore Intern";
  // Result: null;
  // Status: "Sent";

  interface Application {
    AppId: number;
    CompanyName: string;
    DateCompleted: number;
    InterviewDate?: number;
    JobTitle: string;
    Result?: string;
    Status: string;
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/application/").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <NavbarContainer />
      <CreateContainer />
      <DashboardContainer />
    </>
  );
}

export default App;
