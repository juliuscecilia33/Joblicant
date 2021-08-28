import React, { useState } from "react";
import { Dashboard } from "../components";
import {
  FilteringContainer,
  ApplicationContainer,
  CreateContainer,
  NewAppContainer,
  EmptyContainer,
  EmptyFilterContainer,
} from "../containers";

interface DataProps {
  data: any;
  setData: any;
  originalData: any;
  setOriginalData: any;
}

export function DashboardContainer({
  data,
  setData,
  originalData,
  setOriginalData,
}: DataProps) {
  console.log("Dashboard Data: ", data);
  const [openCreate, setOpenCreate] = useState<boolean | undefined>(false);
  const [idData, setIdData] = useState(null);
  console.log("Id Data: ", idData);

  return (
    <>
      <CreateContainer openCreate={openCreate} setOpenCreate={setOpenCreate} />
      <Dashboard>
        <FilteringContainer
          originalData={originalData}
          setOriginalData={setOriginalData}
          setData={setData}
          data={data}
          idData={idData}
          setIdData={setIdData}
        />
        {openCreate && (
          <NewAppContainer
            openDetails={openCreate}
            setOpenDetails={setOpenCreate}
          />
        )}
        {data.length === 0 && originalData.length === 0 ? (
          <EmptyContainer />
        ) : data.length === 0 ? (
          <EmptyFilterContainer />
        ) : idData ? (
          <ApplicationContainer index={idData.AppId} info={idData} />
        ) : (
          data.map((info: any, index: any) => (
            <ApplicationContainer index={index} info={info} />
          ))
        )}
      </Dashboard>
    </>
  );
}
