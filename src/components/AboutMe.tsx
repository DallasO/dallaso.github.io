import React from "react";

export default function AboutMe(): JSX.Element {
  return (
    <div className="item">
      <div>
        <h2 className="h1">Dallas Opelt</h2>
        <h2>Web Developer</h2>
      </div>
      <div className="wide">
        <p>Full stack Developer located in the greater Seattle area.</p>
        <p>
          {
            "Building lightweight minimalist sites, large scalable solutions, immersive and interactive VR applications, and automation scripts. Using my range of skills to help sales estimate and bid on projects. Sharing my knowledge to propose solutions to interesting problems. Leading teams of developers to deliver projects successfully and on time. Communicating with and gathering requirements from clients."
          }
        </p>
      </div>
    </div>
  );
}
