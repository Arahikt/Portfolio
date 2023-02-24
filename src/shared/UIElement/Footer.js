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
              <SocialIcon style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/arahik-torosian/" />{" "}
            </Col>
            <Col>
              <SocialIcon style={{ height: 25, width: 25 }} url="https://github.com/Arahikt/" />{" "}
            </Col>
            <Col>
            <SocialIcon style={{ height: 25, width: 25 }} url="https://discord.com/users/803712726412427325"  /> 
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
