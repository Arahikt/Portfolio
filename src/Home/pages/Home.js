import React,  { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import userImage from "../../Assets/Images/DSC_0528.jpg";

import "./Home.css";

const Home = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Developer",
    "Web Developer",
    "Front End Developer",
    "Back End Developer",
  ];
  const [text, setText] = useState("");
  const period = 500;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      //seting delta to normall pace
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };

  let navigate = useNavigate();
  const handleConnect = () => {
    let path = "/contact";
    navigate(path);
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="header-home">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Arahik Torosian `}</h1>
            <h2>
              <span className="wrap">~ {text} ~</span>
            </h2>
            <p>
              I recently graduated with a Master of Science in Software
              Engineering From the California State University of Northridge.
              (Dec 2022) I am passionate about designing and developing software
              independently or in collaboration with a team. I am passionate
              about developing functional and appealing applications that meet
              customers' expectations.
            </p>
            <p>
              {" "}
              I love to work on new ideas and improve existing ones. So that is
              what I do!{" "}
            </p>
            <p>
              Under the guidance of Dr. Nahapetian, I worked on a research
              project entitled "barometer sensing for mobile applications,"
              which evaluates barometric readings based on a cellphone's air
              pressure/barometer sensor. I could forecast height, determine
              floor change, detect crossing vehicles, determine interactions,
              and monitor steps using a barometer sensor. I developed the app
              utilizing the Android studio platform and Java.{" "}
            </p>
            <p>
              I currently work as a part of a freelancer team to develop a web
              application specifically designed for a retail store in Sherman
              Oaks, CA. It is an internal-use web-based management system for
              handling business activities. it includes inventory management,
              customer management, orders, appointments, and other sections.
            </p>
            <Button variant="primary" onClick={handleConnect}>
              Let's Connect <ArrowRightCircle size={25} />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              className="home-user-image"
              alt="user"
              width={"360px"}
              src={userImage}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Home;
