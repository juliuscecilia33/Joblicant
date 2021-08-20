import React from "react";
import { Create } from "../components";

interface CreateProps {
  openCreate: boolean;
  setOpenCreate: any;
}

export function CreateContainer({ openCreate, setOpenCreate }: CreateProps) {
  return (
    <Create>
      <Create.Button onClick={() => setOpenCreate(true)} />
    </Create>
  );
}
