import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Navbar bg="white" variant="dark" collapseOnSelect>
        <Container>
          <Row>
            <Col>Copyright &copy; {year} - Arahik Torosian &nbsp;</Col>
          </Row>
          <Row>
            <Col>
              <SocialIcon url="https://www.linkedin.com/in/arahik-torosian/" />{" "}
            </Col>
            <Col>
              <SocialIcon url="https://github.com/Arahikt/" />{" "}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
