import React from 'react';
import Social from './Social.js';

export default () => {
  return (
    <header className="App-header">
      <div className="name">
        <h4>Dallas Opelt</h4>
      </div>
      <div className="links">
        <Social icon="github" />
        <Social icon="linkedin" />
      </div>
    </header>
  );
};
