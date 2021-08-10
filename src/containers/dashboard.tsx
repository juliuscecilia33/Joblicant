import React from "react";
import { Dashboard } from "../components";
import { FilteringContainer, ApplicationContainer } from "../containers";
import { DetailsContainer } from "./details";
import { EmptyContainer } from "./empty";

interface DataProps {
  data: any;
}

export function DashboardContainer({ data }: DataProps) {
  console.log(data.length);

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
    </Dashboard>
  );
}
