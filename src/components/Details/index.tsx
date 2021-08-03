import React from "react";

import {
  Container,
  LgField,
  MdField,
  Row,
  SmField,
  Actions,
  Action,
} from "./styles/details";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  name?: string;
  icon?: string;
  background?: string;
  action?: string;
};

export default function Details({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Details.Row = function DetailsRow({ children, ...restProps }: Props) {
  return <Row {...restProps}>{children}</Row>;
};

Details.Actions = function DetailsActions({ children, ...restProps }: Props) {
  return <Actions {...restProps}>{children}</Actions>;
};

Details.Action = function DetailsAction({
  background,
  action,
  icon,
  children,
  ...restProps
}: Props) {
  return (
    <Action background={background!} {...restProps}>
      <i className={icon}></i>
      <p>{action}</p>
    </Action>
  );
};

Details.LgField = function DetailsLgField({
  name,
  children,
  ...restProps
}: Props) {
  return (
    <LgField {...restProps}>
      <p>{name}</p>
      <input placeholder={name} />
    </LgField>
  );
};

Details.MdField = function DetailsMdField({
  name,
  children,
  ...restProps
}: Props) {
  return (
    <MdField {...restProps}>
      <p>{name}</p>
      <input placeholder={name} />
    </MdField>
  );
};

Details.SmField = function DetailsSmField({
  icon,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <SmField {...restProps}>
      <p>{name}</p>
      <i className={icon}></i>
      <input placeholder={name} />
    </SmField>
  );
};
