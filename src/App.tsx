import AboutMe from "./components/AboutMe";
import Footer from "./components/generic/Footer"
import Header from "./components/generic/Header"
import MySkills from "./components/MySkills";
import MyWork from "./components/MyWork";
import MyProjects from "./components/MyProjects";
import './app.css'

function HomePage() {
  return (
    <>
<Header />
      <main className="about-me">
        <AboutMe />
        <MySkills />
        <MyWork />
        <MyProjects />
      </main>
      <Footer/>
      </>
  );
}

export default HomePage;
