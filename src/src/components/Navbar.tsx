import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/1-removebg-preview (3) 1.jpg";
import { useTranslation } from "react-i18next";

const AppNavbar: React.FC = () => {
  const { i18n } = useTranslation(); // i18n instance for language change

  // Function to handle language change
  const handleLanguageChange = (lng: string) => {
    if (lng == "ar") {
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }
    i18n.changeLanguage(lng); // Switch the language to the selected one
  };

  return (
    <Navbar bg="transparent" expand="lg" className="shadow-none">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo aligned to the left */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="90"
            className="rounded-5"
          />
        </Navbar.Brand>

        {/* Navbar Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Collapse for Links */}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-center text-center">
          <Nav className="d-flex align-items-center mx-auto justify-content-center">
            {/* Navbar Links */}
            <Nav.Link as={Link} to="/" className="text-light fs-5 me-2 ">
              {i18n.t("home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light fs-5 me-2">
              {i18n.t("about")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light fs-5 me-2">
              {i18n.t("contact")}
            </Nav.Link>
            <Nav.Link as={Link} to="/our-team" className="text-light fs-5 me-2">
              {i18n.t("our_team")}
            </Nav.Link>
          </Nav>

          {/* Dropdown aligned to the right */}
          <Nav className="ms-auto">
            <NavDropdown
              className="fs-5"
              title={<span>{i18n.t("language")}</span>}
              menuVariant="dark">
              <NavDropdown.Item
                onClick={() => handleLanguageChange("en")}
                className="text-light">
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleLanguageChange("ar")}
                className="text-light">
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
