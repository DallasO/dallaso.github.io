import React, { Component } from "react";

import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyWork from "../components/MyWork";
import MyProjects from "../components/MyProjects";

class HomePage extends Component {
  public render(): JSX.Element {
    return (
      <main className="about-me">
        <AboutMe />
        <MySkills />
        <MyWork />
        <MyProjects />
      </main>
    );
  }
}

export default HomePage;
