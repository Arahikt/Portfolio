import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import userImage from "../../Assets/Images/user-image.jpg";

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
      // updatedText=("")
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      //seting delta to normall pace
      setDelta(period);
    } else if (isDeleting && updatedText.length > 1) {
      setText("asdadasdasd .");
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
    //prettier-ignore
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="header-home">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Arahik Torosian `}</h1>
            <h2><span className="wrap"> {text}</span></h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem debitis, autem commodi illum qui dignissimos voluptatem magni repudiandae nesciunt nobis, sapiente cumque quam repellendus odio adipisci. Ex, repellat est.</p>
          <Button variant="secondary" onClick={handleConnect}>Let's Connect <ArrowRightCircle size={25} /></Button>
         </Col>
         <Col xs={12} md={6} xl={5}>
         <img
            className="object-cover object-center rounded"
            alt="hero"
            width={"160px"}
            src={userImage}
          />
          </Col>
        </Row>
      </Container>
      {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            width={"160px"}
            src={userImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          
        </div>
     
      </div> */}
    </section>
  );
};
export default Home;
