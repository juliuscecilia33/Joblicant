import React from "react";

import { Container } from "./styles/emptyFilter";

type Props = {
  children?: React.ReactNode;
};

export default function EmptyFilter({ children, ...restProps }: Props) {
  return (
    <Container {...restProps}>
      <h2>No Application found!</h2>
    </Container>
  );
}
