import React from "react";

import {
  Container,
  LgField,
  MdField,
  Row,
  SmField,
  Actions,
  Action,
  BottomRow,
  SmMdField,
  FieldContainer,
} from "./styles/details";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  name?: string;
  icon?: string;
  background?: string;
  action?: string;
  setValue?: any;
  value?: any;
};

export default function Details({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Details.Row = function DetailsRow({ children, ...restProps }: Props) {
  return <Row {...restProps}>{children}</Row>;
};

Details.BottomRow = function DetailsBottomRow({
  children,
  ...restProps
}: Props) {
  return <BottomRow {...restProps}>{children}</BottomRow>;
};

Details.Actions = function DetailsActions({ children, ...restProps }: Props) {
  return <Actions {...restProps}>{children}</Actions>;
};

Details.FieldContainer = function DetailsFieldContainer({
  children,
  ...restProps
}: Props) {
  return <FieldContainer {...restProps}>{children}</FieldContainer>;
};

Details.Action = function DetailsAction({
  onClick,
  background,
  action,
  icon,
  children,
  ...restProps
}: Props) {
  return (
    <Action onClick={onClick} background={background!} {...restProps}>
      <i className={icon}></i>
      <p>{action}</p>
    </Action>
  );
};

Details.LgField = function DetailsLgField({
  setValue,
  value,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <LgField {...restProps}>
      <p>{name}</p>
      <input
        onChange={(event: any) => setValue(event.target.value)}
        value={value}
        placeholder={name}
      />
    </LgField>
  );
};

Details.MdField = function DetailsMdField({
  setValue,
  value,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <MdField {...restProps}>
      <p>{name}</p>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={name}
      />
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
      <input disabled={true} placeholder={name} />
    </SmField>
  );
};

Details.SmMdField = function DetailsSmMdField({
  icon,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <SmMdField {...restProps}>
      <p>{name}</p>
      <i className={icon}></i>
      <input placeholder={name} />
    </SmMdField>
  );
};
