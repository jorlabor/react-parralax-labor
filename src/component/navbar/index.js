import React from "react";
import { NavbarItemContainer, NavbarLogo, NavbarContainer } from "./navbar.style";
import Logo from "../../bp_logo.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const PAGES = [
  { title: "Home", path: "/home", disabled: false },
  { title: "About", path: "/about", disabled: false },
  { title: "Contact", path: "/contact", disabled: false },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src={Logo} alt="logo" />
      <NavbarItemContainer>
        
      </NavbarItemContainer>
    </NavbarContainer>
  );
};

export default Navbar;
