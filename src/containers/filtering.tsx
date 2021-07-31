import React from "react";
import { Filtering } from "../components";

export function FilteringContainer() {
  return (
    <Filtering>
      <Filtering.Search name="Job Title/ID" />
      <Filtering.Search name="Company Name" />
      <Filtering.Search name="Date Completed" />
      <Filtering.NoSearch name="Status (Stage)" />
      <Filtering.NoSearch name="Interview Date" />
      <Filtering.NoSearch name="Result" />
      <Filtering.NoFilter name="Notes" />
    </Filtering>
  );
}
