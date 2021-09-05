import React from "react";
// Components
import Layout from "../layouts/Default";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyWork from "../components/MyWork";
import MyProjects from "../components/MyProjects";

function HomePage(): JSX.Element {
  return (
    <Layout>
      <main className="about-me">
        <AboutMe />
        <MySkills />
        <MyWork />
        <MyProjects />
      </main>
    </Layout>
  );
}

export default HomePage;
