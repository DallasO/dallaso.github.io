import React from 'react';

export default (props) => {
  return (
    <div>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <h3>{props.title}</h3>
      </a>
      <p>{props.desc}</p>
    </div>
  );
};
