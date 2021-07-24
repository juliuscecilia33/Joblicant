import React from "react";

import { Container, Logo, Tabs, Tab } from "./styles/navbar";

type Props = {
  children?: React.ReactNode;
  icon?: string;
  name?: string;
  active?: boolean | undefined;
};

export default function Navbar({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.Logo = function NavbarLogo({ children, ...restProps }: Props) {
  return (
    <Logo {...restProps}>
      <img src={`/images/logo.png`} alt="Logo" />
    </Logo>
  );
};

Navbar.Tabs = function NavbarTabs({ children, ...restProps }: Props) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

Navbar.Tab = function NavbarTab({
  active,
  name,
  icon,
  children,
  ...restProps
}: Props) {
  return (
    <Tab active={active} {...restProps}>
      <i className={icon}></i>
      <p>{name}</p>
    </Tab>
  );
};
