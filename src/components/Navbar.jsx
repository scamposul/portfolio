import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="navbar">
      <Nav.Item as="li">
        <Nav.Link href="/home" className="links">
          <b>Home</b>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" className="links">
          Skills
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" className="links">
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" className="links">
          Contact
        </Nav.Link>
      </Nav.Item>
      <div className="leftButton">
        <button variant="primary" size="lg" className="githubButton">
          <i class="fa-brands fa-github"></i>
        </button>
      </div>
      <div className="rightButton">
        <button className="cvButton">
          <p>Download my CV</p>
        </button>
      </div>
    </Nav>
  );
};

export default Navbar;
