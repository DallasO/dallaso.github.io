import React from "react";

export interface ProjectProps {
  desc: string;
  href: string;
  title: string;
}

export default function Project(props: ProjectProps): JSX.Element {
  return (
    <div>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <h3>{props.title}</h3>
      </a>
      <p>{props.desc}</p>
    </div>
  );
}
