import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import AboutMe from "./sections/AboutMe";
import MySkills from "./sections/MySkills";
import MyWork from "./sections/MyWork";
import MyProjects from "./sections/MyProjects";
import Footer from "./components/Footer";

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Header />

        <main className="about-me">
          <AboutMe />
          <MySkills />
          <MyWork />
          <MyProjects />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
