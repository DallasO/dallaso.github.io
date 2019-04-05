import React, { Component } from 'react';

import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Project from './components/Project.js';

import { ReactComponent as IittalaLogo} from './img/iittala-logo.svg';
import iittala from './img/iittala.png';
import crucibleBrewing from './img/crucible-brewing.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="about-me">
          <div className="item">
            <div>
              <h1>Dallas Opelt</h1>
              <h2>Web Developer</h2>
            </div>
            <div className="wide">
              <p>
                <a href="https://www.linkedin.com/in/dallasopelt" className="callout" target="_blank" rel="noopener noreferrer">Looking for new opportunities!<i className="fas fa-external-link-alt"></i></a>
                <small>-&nbsp;Message me on LinkedIn!</small>
              </p>
              <p>
                Full stack Web Developer located in the greater Seattle area.
              </p>
              <p>
                As a Web Developer, I've used many technologies to create beautiful frontends and featureful backends. I believe in mobile and UX first design.
              </p>
            </div>
          </div>
          <div className="item">
            <h2>My Skills</h2>
            <div>
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3"></i>
              <i className="fab fa-js-square"></i>
              <i className="fab fa-react"></i>
              <h3>Frontend</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>AJAX</li>
                <li>jQuery</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <i className="fab fa-php"></i>
              <i className="fab fa-python"></i>
              <i className="fas fa-terminal"></i>
              <h3>Backend</h3>
              <ul>
                <li>PHP</li>
                <li>Python</li>
                <li>Django</li>
                <li>Bash</li>
              </ul>
            </div>
            <div>
              <i className="fab fa-linux"></i>
              <i className="fab fa-wordpress"></i>
              <i className="fab fa-drupal"></i>
              <h3>Additional</h3>
              <ul>
                <li>SQL</li>
                <li>Linux</li>
                <li>XCart</li>
                <li>WordPress</li>
                <li>Drupal</li>
              </ul>
            </div>
          </div>
          <div className="item large">
            <div>
              <h2>My Work</h2>
              <p>Check out some of my work!</p>
            </div>
            <div className="showcase">
              <a href="https://iittala.com.au" target="_blank" rel="noopener noreferrer">
                  <IittalaLogo alt="Iittala" className="img-responsive logo" />
              </a>
              <p>
                Completely redesigned and custom coded the frontend. From the header to the footer, and the homepage to the checkout, almost everything you see was coded by me.
              </p>
              <a href="https://iittala.com.au" target="_blank" rel="noopener noreferrer">
                <img src={iittala} alt="iittala" className="img-responsive screengrab" />
              </a>
            </div>
            <div className="showcase">
              <a href="https://cruciblebrewing.com" target="_blank" rel="noopener noreferrer">
                <h3>Crucible Brewing</h3>
              </a>
              <p>
                Installed WordPress and customized a theme to be mobile responsive. Added <a href="https://dev2.cruciblebrewing.com/index.php/our-beer/" target="_blank" rel="noopener noreferrer">JS&nbsp;API&nbsp;call</a> to load a menu that's always up to date.
              </p>
              <a href="https://cruciblebrewing.com" target="_blank" rel="noopener noreferrer">
                <img src={crucibleBrewing} alt="Crucible Brewing" className="img-responsive screengrab" />
              </a>
            </div>
          </div>
          <div className="item">
            <div>
              <h2>Projects</h2>
              <p>Check out my great projects!</p>
            </div>
            <Project
              href="https://github.com/DallasO/olympic-data-visualized"
              title="The Olympic Games - Visualized"
              desc="I'm currently working on a Python/Django website where I analyze data about the Olympic Games and display the information in elegant visualizations."
            />
            <Project
              href="https://github.com/DallasO/weekly-random-reminder"
              title="Random Weekly Reminder"
              desc="A python app to remind you to take a break at random times throughout the week. Can also integrate with your Home Automation Server via MQTT."
            />
            <Project
              href="https://github.com/DallasO/ClamAV-cron-scan"
              title="ClamAV Cron"
              desc="A Bash script to scan your linux computer for viruses using ClamAV. Intended for personal computers, this script also displays notifications to the logged in user."
            />
            <Project
              href="https://github.com/DallasO/launch-all-browsers"
              title="Open Link In All Browsers"
              desc="Scripts for Windows and Linux to open a link in all installed browsers. I wrote this to help me test my web pages locally."
            />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
