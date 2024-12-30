import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/1-removebg-preview (3) 1.jpg";
import { useTranslation } from "react-i18next";
import "../style/global.css"; // Import your custom CSS for additional styling

const AppNavbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const handleLanguageChange = (lng: string) => {
    if (lng === "ar") {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    }
    i18n.changeLanguage(lng);
  };

  const handleToggle = (isOpen: boolean) => {
    setShowDropdown(isOpen);
  };

  return (
    <Navbar bg="transparent" expand="lg" className="shadow-none">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="90"
            className="rounded-5 mx-5"
          />
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Collapse */}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-center text-center mx-5">
          <Nav className="d-flex align-items-center mx-auto justify-content-center">
            {/* Nav Links with active state */}
            <Nav.Link
              as={Link}
              to="/"
              className={`fs-5 me-2 ${
                location.pathname === "/" ? "active" : ""
              }`}>
              {i18n.t("home")}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`fs-5 me-2 ${
                location.pathname === "/about" ? "active" : ""
              }`}>
              {i18n.t("about")}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`fs-5 me-2 ${
                location.pathname === "/contact" ? "active" : ""
              }`}>
              {i18n.t("contact")}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/our-team"
              className={`fs-5 me-2 ${
                location.pathname === "/our-team" ? "active" : ""
              }`}>
              {i18n.t("our_team")}
            </Nav.Link>
          </Nav>

          {/* Dropdowns */}
          <Nav className="ms-lg-auto">
            {/* Language Dropdown */}
            <NavDropdown
              className="fs-5 ms-lg-5"
              title={<span>{i18n.t("language")}</span>}
              menuVariant="light"
              show={showDropdown}
              onToggle={handleToggle}>
              <NavDropdown.Item onClick={() => handleLanguageChange("en")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLanguageChange("ar")}>
                Arabic
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
