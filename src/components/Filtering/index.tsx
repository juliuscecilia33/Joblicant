import React from "react";
import { AnyStyledComponent } from "styled-components";

import {
  Container,
  Search,
  NoSearch,
  NoFilter,
  DateFilterContainer,
  DateSearch,
} from "./styles/filtering";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  icon?: string;
  name?: string;
  value?: string;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
};

export default function Filtering({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Filtering.Search = function SearchingFilter({
  onClick,
  onFocus,
  onBlur,
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
      <input
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={name}
      />
      <button onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
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

Filtering.DateFilterContainer = function FilteringDateFilterContainer({
  children,
  ...restProps
}: Props) {
  return <DateFilterContainer {...restProps}>{children}</DateFilterContainer>;
};

Filtering.DateSearch = function DateSearchingFilter({
  onClick,
  onFocus,
  onBlur,
  onChange,
  value,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <DateSearch {...restProps}>
      <div>
        <p>{name}</p>
        <i className="fas fa-sort-amount-up"></i>
        <i className="fas fa-sort-amount-down-alt"></i>
      </div>
      <input
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={name}
      />
      <button onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
    </DateSearch>
  );
};
