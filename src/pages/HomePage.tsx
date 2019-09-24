import React from "react";

import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyWork from "../components/MyWork";
import MyProjects from "../components/MyProjects";

function HomePage(): JSX.Element {
  return (
    <main className="about-me">
      <AboutMe />
      <MySkills />
      <MyWork />
      <MyProjects />
    </main>
  );
}

export default HomePage;
