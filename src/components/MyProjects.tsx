import React from "react";

import Project from "./generic/Project";
import { MyProjectsData as myProjects } from "./data/MyProjectsData";

export default function MyProjects(): JSX.Element {
  return (
    <div className="item">
      <div>
        <h2>Projects</h2>
        <p>Check out my great projects!</p>
      </div>
      {myProjects.map(
        (project): JSX.Element => (
          <Project
            title={project.title}
            desc={project.desc}
            href={project.href}
            key={`project_${project.title.split(" ").join("")}`}
          />
        )
      )}
    </div>
  );
}
