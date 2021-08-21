import React from "react";

import { Container, Search, NoSearch, NoFilter } from "./styles/filtering";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  icon?: string;
  name?: string;
  value?: string;
  onChange?: any;
};

export default function Filtering({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Filtering.Search = function SearchingFilter({
  onChange,
  value,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <Search {...restProps}>
      <div>
        <p>{name}</p>
        <i className="fas fa-sort-amount-up"></i>
        <i className="fas fa-sort-amount-down-alt"></i>
      </div>
      <input value={value} onChange={onChange} placeholder={name} />
    </Search>
  );
};

Filtering.NoSearch = function FilteringNoSearch({
  name,
  children,
  ...restProps
}: Props) {
  return (
    <NoSearch {...restProps}>
      <div>
        <p>{name}</p>
        <i className="fas fa-sort-amount-up"></i>
        <i className="fas fa-sort-amount-down-alt"></i>
      </div>
    </NoSearch>
  );
};

Filtering.NoFilter = function FilteringNoFilter({
  name,
  children,
  ...restProps
}: Props) {
  return (
    <NoFilter {...restProps}>
      <p>{name}</p>
    </NoFilter>
  );
};
