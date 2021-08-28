import React from "react";

import { Container } from "./styles/empty";

type Props = {
  children?: React.ReactNode;
};

export default function Empty({ children, ...restProps }: Props) {
  return (
    <Container {...restProps}>
      <h2>No Applications seen! Create one above</h2>
      {children}
    </Container>
  );
}
