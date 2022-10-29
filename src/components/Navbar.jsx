import React from "react";
import Nav from "react-bootstrap/Nav";
import CV from "../docs/scampocv.pdf";
import "../styles/navbar.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <BrowserRouter>
    <Nav defaultActiveKey="/" as="ul" className="navbar">
      <div className="navlinks">
      <Nav.Item as="li">
          <Link to={"#home"} className="links">
            <b>{t("nav.home")}</b>
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            to="#skills"
            eventKey="link-1"
            className="links"
            smooth
          >
            {t("nav.skills")}
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            to="#projects"
            eventKey="link-2"
            className="links"
            smooth
          >
            {t("nav.projects")}
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            to="#contact"
            eventKey="link-2"
            className="links"
            smooth
          >
            {t("nav.contact")}
          </Link>
        </Nav.Item>
      </div>
        <div className="leftButton">
          <button variant="primary" size="lg" className="githubButton">
            <a href="https://github.com/scamposul" className="gtIcon">
              <i class="fa-brands fa-github"></i>
            </a>
          </button>
        </div>
        <div className="rightButton">
          <button className="cvButton" href={CV}>
            <a href={CV} className="downloadCV">
            {t("nav.download-my-cv")}
            </a>
          </button>
        </div>
      </Nav>
    </BrowserRouter>
      
  );
};

export default Navbar;
