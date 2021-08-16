import React from "react";

import { MyWorkData } from "./data/MyWorkData";

export default function MyWork(): JSX.Element {
  return (
    <div className="item large">
      <div>
        <h2>Experience</h2>
      </div>
      {MyWorkData.map(
        (myWork): JSX.Element => {
          const alt: string = myWork.alt ? myWork.alt : myWork.title;

          return (
            <div className="showcase" key={alt}>
              {myWork.titleAlt ? (
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  <a
                    href={myWork.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {myWork.titleAlt}
                  </a>
                </div>
              ) : (
                <h3>
                  <a
                    href={myWork.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {myWork.title}
                  </a>
                </h3>
              )}
              {myWork.description.map(
                (desc): JSX.Element => (
                  <p key={`desc_${Math.random()}`}>{desc}</p>
                )
              )}
              {myWork.image && (
                <a href={myWork.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={myWork.image}
                    alt={alt}
                    className="img-responsive screengrab"
                  />
                </a>
              )}
            </div>
          );
        }
      )}
    </div>
  );
}
