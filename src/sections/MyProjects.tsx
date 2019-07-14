import React from "react";

import Project from "../components/Project";
import { myProjects } from "../data/myProjects";

export default function MyProjects(): JSX.Element {
  return (
    <div className="item">
      <div>
        <h2>Projects</h2>
        <p>Check out my great projects!</p>
      </div>
      {myProjects &&
        myProjects.map(
          (project, projInd): JSX.Element => (
            <Project
              title={project.title}
              desc={project.desc}
              href={project.href}
              key={"project_" + projInd}
            />
          )
        )}
    </div>
  );
}
