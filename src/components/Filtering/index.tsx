import React from "react";

import { Container, Filter, NoFilter } from "./styles/filtering";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  icon?: string;
  name?: string;
};

export default function Filtering({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Filtering.Filter = function FilteringFilter({
  name,
  children,
  ...restProps
}: Props) {
  return (
    <Filter {...restProps}>
      <div>
        {name}
        <i className="fas fa-sort-amount-up"></i>
        <i className="fas fa-sort-amount-down-alt"></i>
      </div>
      <input placeholder={name} />
    </Filter>
  );
};

Filtering.NoFilter = function FilteringNoFilter({
  name,
  children,
  ...restProps
}: Props) {
  return (
    <NoFilter {...restProps}>
      <div>
        {name}
        <i className="fas fa-sort-amount-up"></i>
        <i className="fas fa-sort-amount-down-alt"></i>
      </div>
    </NoFilter>
  );
};
