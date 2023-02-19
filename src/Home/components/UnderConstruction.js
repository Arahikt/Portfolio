import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const UnderConstruction = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert variant="light" show={show}>
        <Alert.Heading>
          <h1> Coming Soon</h1>Shhh… don't tell anyone.
        </Alert.Heading>
        <p>
          <br />
          Hi 👋. This page is under construction and it will be lunched soon.😊
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="secondary">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default UnderConstruction;
