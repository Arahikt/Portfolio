import React, { useState } from "react";
import backgroundContact from "../../Assets/Images/mail-delivery.png";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./Contact.css";

const Contact = (props) => {
  const formInitial = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  };
  const [buttonText, setButtonText] = useState("Submit");
  const [state, setState] = useState(formInitial);

  const handleChange = (event) => {
    setState((prevState) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  const toastifySuccess = () => {
    toast.success("Message Sent Successfully.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setButtonText("Sending");
    let response
    try {
      response = await fetch(process.env.REACT_APP_BACKEND_URL + "/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(state),
    });
      setState(formInitial);
    } catch (error) {} 

    let responseData = await response.json();
    if (responseData.status === "success") {
    //   alert("Message Sent");
        toastifySuccess();
    } else if (responseData.status === "fail") {
      alert("Message failed to send");
    }
    setButtonText("Submit");
  };

  return (
    <section className="contact-page">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={backgroundContact} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2 className="contact-header">Contact Us</h2>
              <p className="contact-reminder">If you would like a copy of my résumé, kindly submit a request. Please enter "Resume" in the message area.</p>
              <form onSubmit={submitHandler}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="First Name" value={state.firstName} name="firstName" onChange={handleChange} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Last Name" value={state.lastName} name="lastName" onChange={handleChange} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Phone Number" value={state.phone} name="phone" onChange={handleChange} 
                   minLength= "10"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="Email" value={state.email} name="email" onChange={handleChange} />                  
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <textarea rows="6" placeholder="Message" value={state.message} name="message" onChange={handleChange}></textarea>
                  </Col> 
                  <Col size={12} sm={6} className="px-2 py-2">
                    <SocialIcon style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/arahik-torosian/" />{" "}
                    <SocialIcon style={{ height: 25, width: 25 }} url="https://github.com/Arahikt/" />{" "}
                    <SocialIcon style={{ height: 25, width: 25 }} url="https://discord.com/users/803712726412427325"  /> {" "}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <button disabled={(state.firstName && state.lastName && state.email && state.phone && state.message )=== ""  } className="form-button" type="submit"><span>{buttonText}</span></button>
                  </Col>
                </Row>
                <ToastContainer />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
