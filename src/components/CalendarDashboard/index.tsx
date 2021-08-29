import React from "react";

import { Container } from "./styles/calendarDashboard";

type Props = {
  children?: React.ReactNode;
};

export default function CalendarDashboard({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}
