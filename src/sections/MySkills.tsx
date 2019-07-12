import React from "react";

export default () => {
  return (
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
  );
};
