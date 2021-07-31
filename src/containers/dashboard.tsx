import React from "react";
import { Dashboard } from "../components";
import { FilteringContainer, ApplicationContainer } from "../containers";

export function DashboardContainer() {
  return (
    <Dashboard>
      <FilteringContainer />
      <ApplicationContainer />
    </Dashboard>
  );
}
