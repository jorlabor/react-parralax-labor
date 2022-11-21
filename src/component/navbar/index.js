import React from "react";
import {
  NavbarItemContainer,
  NavbarLogo,
  NavbarContainer,
  NavbarItemLink,
  NavbarLink,
} from "./navbar.style";
import Logo from "../../bp_logo.jpg";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Home from "../../pages/home";

export const PAGES = [
  { title: "Home", path: "/home", disabled: false },
  { title: "About", path: "/about", disabled: false },
  { title: "Contact", path: "/contact", disabled: false },
];

const Navbar = () => {
  return (
    <BrowserRouter>
      <NavbarContainer>
        <NavbarLogo src={Logo} alt="logo" />
        <NavbarItemContainer>
          <NavbarItemLink>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
                textDecoration: "none",
                fontSize: "20px",
              })}
            >
              Home
            </NavLink>
          </NavbarItemLink>
          <NavbarItemLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
                textDecoration: "none",
                fontSize: "20px",
              })}
            >
              About
            </NavLink>
          </NavbarItemLink>
          <NavbarItemLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
                textDecoration: "none",
                fontSize: "20px",
              })}
            >
              Contact
            </NavLink>
          </NavbarItemLink>
        </NavbarItemContainer>
      </NavbarContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
