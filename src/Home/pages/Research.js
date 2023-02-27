import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import pdfFile from "../../Assets/Research/Arahik_Torosian_thesis_2023_Final.pdf";

import "./Research.css";

const Research = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert variant="light" show={show}>
        <Alert.Heading>
          <h5> Master's Thesis</h5>
        </Alert.Heading>
        <p>
          <small>
            Under the guidance of Dr. Nahapetian, I worked on a research project
            entitled "barometer sensing for mobile applications," which
            evaluates barometric readings based on air pressure and cellphone's
            barometer sensor. I could forecast height, determine floor change,
            detect crossing vehicles, determine interactions, and monitor steps
            using a barometer sensor.
          </small>
        </p>
        <p>
          <small>
            The application is developed utilizing the Android studio platform
            and Java. Since the measurements were recorded and visualized in
            real time, the data is easier to comprehend. Once the data is
            collected, it can be shared with Google Drive and other applications
            for use in additional studies.
          </small>
        </p>
        <p>
          <br />
          To Download the full pdf, please <a href={pdfFile}> Click Here!</a>
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="primary">
            Close
          </Button>
        </div>
      </Alert>

      <div className="research-container">
        {/* <object data={pdfFile} type="application/pdf" width="100%" height="100%">
      </object> */}
      </div>
    </>
  );
};

export default Research;
