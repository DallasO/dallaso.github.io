import React, { Component } from 'react';

import './App.css';

import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import MySkills from './components/MySkills.js';
import MyWork from './components/MyWork.js';
import MyProjects from './components/MyProjects.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
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
