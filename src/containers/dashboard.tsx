import React, { useState } from "react";
import { Dashboard } from "../components";
import {
  FilteringContainer,
  ApplicationContainer,
  CreateContainer,
} from "../containers";
import { EmptyContainer } from "./empty";
import { NewAppContainer } from "./newApp";

interface DataProps {
  data: any;
}

export function DashboardContainer({ data }: DataProps) {
  console.log(data);
  const [openCreate, setOpenCreate] = useState<boolean | undefined>(false);

  return (
    <>
      <CreateContainer openCreate={openCreate} setOpenCreate={setOpenCreate} />
      <Dashboard>
        <FilteringContainer data={data} />
        {openCreate && (
          <NewAppContainer
            openDetails={openCreate}
            setOpenDetails={setOpenCreate}
          />
        )}
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
