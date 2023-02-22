import React from "react";
import { Button, Card, Col, Container, Row, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";

import angularProject from "../../Assets/Images/Projects/angular project.png";
import mern from "../../Assets/Images/Projects/mern.png";
import javaProject from "../../Assets/Images/Projects/java project.png";
import pythonProject from "../../Assets/Images/Projects/python project.png";

import "./Projects.css";

const Projects = () => {
  let navigate = useNavigate();
  const handleButton = () => {
    let path = "/projectDemo";
    navigate(path);
  };

  return (
    <Container>
      <CardGroup className="project align-items-center mt-5">
        <Col className="d-flex flex-column" size={3}>
          <Card className="project-card">
            <Card.Img
              // className="projects-card-image"
              variant="top"
              src={mern}
            />
            <Card.Body>
              <Card.Title>Management System</Card.Title>
              <Card.Text>
                MongoDB Express React Node.js <br />
                <small className="text-muted">
                  Designed and developed management system for handling business
                  activities. it includes inventory management, customer
                  management, orders, appointments, and other sections.
                </small>
              </Card.Text>
            </Card.Body>
            {/* add handler for demo to take into instyle video */}
            <Button
              className="card-botton"
              variant="primary"
              onClick={handleButton}
            >
              Demo
            </Button>
          </Card>
        </Col>

        <Col size={3}>
          <Card className="project-card">
            <Card.Img
              // className="projects-card-image"
              variant="top"
              src={angularProject}
            />
            <Card.Body>
              <Card.Title>Social App</Card.Title>
              <Card.Text>
                Html5 Css Bootstrap C# Typescript <br />
                <small className="text-muted">
                  This application is a mock up off socila media application
                  where users can interact with each other by sending messages,
                  liking, adding, and...
                </small>
              </Card.Text>
            </Card.Body>
            <Button
              className="card-botton"
              variant="primary"
              href="https://github.com/Arahikt/SocialApp-MATE"
            >
              GitHub <ArrowRightCircle size={15} /> 
            </Button>
          </Card>
        </Col>

        <Col size={3}>
          <Card className="project-card">
            <Card.Img
              // className="projects-card-image"
              variant="top"
              src={javaProject}
            />
            <Card.Body className="bottom">
              <Card.Title>Barometer Sensor</Card.Title>
              <Card.Text>
                Java Android Studio <br />
                <small className="text-muted">
                  This application evaluates the ability to use a smartphone's
                  barometer sensor for a range of applications other than its
                  original, intended application of altitude sensing. The
                  barometer sensor readings have been visualized through a graph
                  and compared to the action that has been performed.
                </small>
              </Card.Text>
            </Card.Body>
            <Button
              className="card-botton"
              variant="primary"
              href="https://github.com/Arahikt/Barometer-Sensor"
            >
              GitHub <ArrowRightCircle size={15} />
            </Button>
          </Card>
        </Col>

        <Col size={3}>
          <Card className="project-card">
            <Card.Img
              // className="projects-card-image"
              variant="top"
              src={pythonProject}
            />
            <Card.Body>
              <Card.Title>Reddit Scraper</Card.Title>
              <Card.Text>
                Python Reddit API Praw <br />
                <small className="text-muted">
                  Developed a Reddit scrapper application using Python to look
                  for activities within Reddit.com. Validated if a user and
                  subreddit exist within the website. Searched user posts in a
                  subreddit and keyword usage in a subreddit. Created a graph
                  using Pycharts showing word usage in the comment section of a
                  subreddit.
                </small>
              </Card.Text>
            </Card.Body>
            <Button
              className="card-botton"
              variant="primary"
              href="https://github.com/Arahikt/Reddit_Scrape_Python"
            >
              GitHub <ArrowRightCircle size={15} />
            </Button>
          </Card>
        </Col>
      </CardGroup>
    </Container>
  );
};

export default Projects;
