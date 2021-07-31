import React from "react";
import { Dashboard } from "../components";
import { FilteringContainer } from "../containers";

export function DashboardContainer() {
  return (
    <Dashboard>
      <FilteringContainer />
    </Dashboard>
  );
}
