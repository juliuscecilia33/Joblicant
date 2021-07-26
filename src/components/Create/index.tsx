import React from "react";

import { Container, Button } from "./styles/create";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
};

export default function Create({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Create.Button = function CreateButton({ children, ...restProps }: Props) {
  return (
    <Button {...restProps}>
      <i className="fas fa-feather-alt"></i>
      <p>Create</p>
    </Button>
  );
};
