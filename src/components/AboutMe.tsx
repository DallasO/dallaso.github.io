import React from "react";

export default function AboutMe(): JSX.Element {
  return (
    <div className="item">
      <div>
        <h1>Dallas Opelt</h1>
        <h2>Web Developer</h2>
      </div>
      <div className="wide">
        <h4>Looking for new opportunities!</h4>
        <p>
          <a
            href="https://www.linkedin.com/in/dallasopelt"
            className="callout"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Message me on LinkedIn!"}
          </a>
        </p>
        <p>{"Full stack Web Developer located in the greater Seattle area."}</p>
        <p>
          {
            "As a Web Developer, I've used many technologies to create beautiful frontends and featureful backends. I believe in mobile and UX first design."
          }
        </p>
        <p>
          {
            "I'm currently helping a startup to revolutionize an industry while using React, Typescript, Node, Express, and MongoDB to name a few technologies. This statup is creating a marketing platform for producers of a niche product to communicate directly to their consumers, while giving consumers transparency into what they are buying."
          }
        </p>
        <p>
          {
            "I've been a Web Developer for 5 years, working with directly with clients or business users. The projects I've worked on range from small hobby eCommerce stores, to large global companies. I've also worked with all kinds of languages and had to learn new technologies. See my list of skills below."
          }
        </p>
        <p>
          {
            "One of my current projects is working with Python, Django, and React to analyze trends of a data set, and visualize the data with a charting framework. I'm looking forward to the challenges each step of the way."
          }
        </p>
      </div>
    </div>
  );
}
