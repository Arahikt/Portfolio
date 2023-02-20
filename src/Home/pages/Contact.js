import React , {useState} from "react";
import backgroundContact from "../../Assets/Images/mail-delivery.png";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');

  const handleChange = event => {
    const name= event.target.name;
    const value = event.target.value;
      setState({...state,[name]: value})
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setButtonText("Sending");
    try {
      await fetch("http://localhost:5000/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
    setButtonText("Send");
    setState("");
    } catch (error) {}
  };

  return (

        <section className="contact-page">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img  src={backgroundContact} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
     
                <div >
                <h2 className="contact-header">Contact Us</h2>
                <form onSubmit={submitHandler}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={state.firstName} placeholder="First Name" name="firstName" onChange={handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={state.lastName} placeholder="Last Name" name="lastName" onChange={handleChange}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={state.phone} placeholder="Phone Number" name="phone" onChange={handleChange}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={state.email} placeholder="Email" name="email" onChange={handleChange} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={state.message} placeholder="Message" name="message" onChange={handleChange}></textarea>
                      <button className ="form-button" type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
   
  );
};
export default Contact;
