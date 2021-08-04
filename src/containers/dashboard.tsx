import React from "react";
import { Dashboard } from "../components";
import { FilteringContainer, ApplicationContainer } from "../containers";
import { DetailsContainer } from "./details";

export function DashboardContainer() {
  return (
    <Dashboard>
      <FilteringContainer />
      <ApplicationContainer />
      <ApplicationContainer />
      <ApplicationContainer />
    </Dashboard>
  );
}
