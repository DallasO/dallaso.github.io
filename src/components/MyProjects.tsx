import Project from "./generic/Project";
import { MyProjectsData as myProjects } from "./data/MyProjectsData";

export default function MyProjects() {
  return (
    <div className="item">
      <div>
        <h2>Projects</h2>
      </div>
      {myProjects.map(
        (project) => (
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
