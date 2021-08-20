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
  Cancel,
  FieldContainer,
  MdFieldContainer,
  DropdownFieldContainer,
} from "./styles/newApp";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  name?: string;
  icon?: string;
  background?: string;
  action?: string;
  setValue?: any;
  value?: any;
  onChange?: any;
};

export default function NewApp({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

NewApp.Row = function NewAppRow({ children, ...restProps }: Props) {
  return <Row {...restProps}>{children}</Row>;
};

NewApp.BottomRow = function NewAppBottomRow({
  children,
  ...restProps
}: Props) {
  return <BottomRow {...restProps}>{children}</BottomRow>;
};

NewApp.Actions = function NewAppActions({ children, ...restProps }: Props) {
  return <Actions {...restProps}>{children}</Actions>;
};

NewApp.FieldContainer = function NewAppFieldContainer({
  children,
  ...restProps
}: Props) {
  return <FieldContainer {...restProps}>{children}</FieldContainer>;
};

NewApp.DropdownFieldContainer = function NewAppDropdownFieldContainer({
  children,
  ...restProps
}: Props) {
  return (
    <DropdownFieldContainer {...restProps}>{children}</DropdownFieldContainer>
  );
};

NewApp.MdFieldContainer = function NewAppMdFieldContainer({
  children,
  ...restProps
}: Props) {
  return <MdFieldContainer {...restProps}>{children}</MdFieldContainer>;
};

NewApp.Action = function NewAppAction({
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

NewApp.Cancel = function NewAppCancel({
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <Cancel onClick={onClick} {...restProps}>
      Cancel
    </Cancel>
  );
};

NewApp.LgField = function NewAppLgField({
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

NewApp.MdField = function NewAppMdField({
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

NewApp.SmField = function NewAppSmField({
  value,
  onChange,
  icon,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <SmField {...restProps}>
      <p>{name}</p>
      <i className={icon}></i>
      <input
        value={value}
        onChange={onChange}
        disabled={true}
        placeholder={name}
      />
    </SmField>
  );
};

NewApp.SmMdField = function NewAppSmMdField({
  value,
  onChange,
  icon,
  name,
  children,
  ...restProps
}: Props) {
  return (
    <SmMdField {...restProps}>
      <p>{name}</p>
      <i className={icon}></i>
      <input
        value={value}
        onChange={onChange}
        disabled={true}
        placeholder={name}
      />
    </SmMdField>
  );
};
