import React, { useRef, useState } from "react";

import ReactPlayer from "react-player";
import comingSoon from '../../Assets/Images/Projects/vecteezy_silver-cinematic-coming-soon-title-animation_9859380_481.mp4';
import "./ProjectDemo.css";

const ProjectDemo = () => {
  return (
    <div className="player-wrapper">
     
        <ReactPlayer
          url={comingSoon}
          className="video-player"
          width="70%"
          height="70%"
          controls
        />
      
    </div>
  );
};

export default ProjectDemo;
