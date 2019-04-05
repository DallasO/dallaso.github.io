import React from 'react';
import Social from './Social.js';

function Copyright() {
  const d = new Date().getFullYear();
  const copyright = d > 2019 ? '2019-' + d : d;
  return (
    <div className="copyright">
      &copy;&nbsp;{copyright}
    </div>
  );
};

export default () => {
  return (
    <footer>
      <div className="links">
        <Social icon="github" />
        <Social icon="linkedin" />
      </div>
      <Copyright />
    </footer>
  );
};
