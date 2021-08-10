import React from "react";

import { Container } from "./styles/dashboard";

type Props = {
  children?: React.ReactNode;
};

export default function Dashboard({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}
