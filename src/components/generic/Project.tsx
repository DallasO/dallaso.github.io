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
      <h3>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>{desc}</p>
    </div>
  );
}
