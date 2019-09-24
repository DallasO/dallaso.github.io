import React from "react";

export interface ProjectProps {
  desc: string;
  href: string;
  title: string;
}

export default function Project(props: ProjectProps): JSX.Element {
  const { desc, href, title } = props;
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <p>{desc}</p>
    </div>
  );
}
