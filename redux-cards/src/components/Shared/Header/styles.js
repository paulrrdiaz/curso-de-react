import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: rgba(var(--white), 1);
  box-shadow: 0 0 7px 2px rgba(var(--black), 0.25);
`;

export const NavList = styled.ul`
  display: flex;
`;

const isActive = ({ isCurrent }) => {
  return isCurrent ? { "data-is-active": true } : null;
};

const LimkWrapper = props => <Link getProps={isActive} {...props} />;

export const NavListLink = styled(LimkWrapper)`
  border-bottom: 4px solid rgba(var(--green), 0);
  color: rgba(var(--green), 1);
  display: block;
  font-weight: bold;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 5px 10px;
  margin: 0 10px;
  transition: border-bottom 0.3s linear 0s;

  &[aria-current="page"] {
    border-bottom: 4px solid rgba(var(--green), 1);
  }
`;
