import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar bg="black" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand" href="/">A T</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/projects">PROJECTS</Nav.Link>
              <Nav.Link href="/research">RESEARCH</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link className="header-button" href="/contact">
          <Button>Let's Connect</Button>
          </Nav.Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
