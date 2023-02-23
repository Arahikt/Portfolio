import React from "react";
import pdfFile from "../../Assets/Research/Arahik_Torosian_thesis_2023_Final_.pdf";

const Research = () => {
  return (
    <div className="research-container">
      <iframe
        className="responsive-iframe"
        title="This is a unique title"
        src={pdfFile}
        style={{width:"100%", height:"84vh"}}
      ></iframe>
    </div>
  );
};

export default Research;
