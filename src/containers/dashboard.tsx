import React from "react";
import { Dashboard } from "../components";
import { FilteringContainer, ApplicationContainer } from "../containers";
import { DetailsContainer } from "./details";

interface DataProps {
  data: any;
}

export function DashboardContainer({ data }: DataProps) {
  console.log(data);

  return (
    <Dashboard>
      <FilteringContainer />
      {data.map((info: any, index: any) => (
        <ApplicationContainer index={index} info={info} />
      ))}
    </Dashboard>
  );
}
