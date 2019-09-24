import React from "react";

import { MyWorkData } from "./data/MyWorkData";

export default function MyWork(): JSX.Element {
  return (
    <div className="item large">
      <div>
        <h2>Experience</h2>
        <p>Check out some of my work!</p>
      </div>
      {MyWorkData.map(
        (myWork): JSX.Element => {
          let alt = "";
          if (myWork.alt) {
            alt = myWork.alt;
          } else if (typeof myWork.title === "string") {
            alt = myWork.title;
          }

          return (
            <div className="showcase" key={alt}>
              <a href={myWork.link} target="_blank" rel="noopener noreferrer">
                {typeof myWork.title === "string" ? (
                  <h3>{myWork.title}</h3>
                ) : (
                  myWork.title
                )}
              </a>
              {myWork.description.map(
                (desc): JSX.Element => (
                  <p key={`desc_${Math.random()}`}>{desc}</p>
                )
              )}
              <a href={myWork.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={myWork.image}
                  alt={alt}
                  className="img-responsive screengrab"
                />
              </a>
            </div>
          );
        }
      )}
    </div>
  );
}
