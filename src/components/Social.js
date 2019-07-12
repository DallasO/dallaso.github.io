import React from 'react';

export default (props) => {
  switch (props.icon) {
    case 'github':
      const link = props.link || "https://github.com/DallasO";
      return (
          <a className="social-link" href={link} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      );
    case 'linkedin':
      return (
        <a className="social-link" href="https://www.linkedin.com/in/dallasopelt/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      );
    case 'hackerrank':
      return (
        <a className="social-link" href="https://www.hackerrank.com/opeltd/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-hackerrank"></i>
        </a>
      );
    default:
      return null;
  };
};
