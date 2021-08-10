import React from "react";

import { Container } from "./styles/empty";

type Props = {
  children?: React.ReactNode;
};

export default function Empty({ children, ...restProps }: Props) {
  return (
    <Container {...restProps}>
      <h2>Create your Application:</h2>
      {children}
    </Container>
  );
}
