import React, { useState } from "react";
import { Dashboard } from "../components";
import {
  FilteringContainer,
  ApplicationContainer,
  CreateContainer,
} from "../containers";
import { EmptyContainer } from "./empty";

interface DataProps {
  data: any;
}

export function DashboardContainer({ data }: DataProps) {
  console.log(data.length);
  const [openCreate, setOpenCreate] = useState<boolean | undefined>(false);

  console.log(openCreate);

  return (
    <>
      <CreateContainer openCreate={openCreate} setOpenCreate={setOpenCreate} />
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
    </>
  );
}
