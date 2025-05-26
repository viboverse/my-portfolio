import { useContext } from "react";
import { ProjectContext } from "../context/project-context";

export default function ProjectsSideBar() {
  const { projects, setSelectedProject } = useContext(ProjectContext);

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  return (
    <div className="sidebar">
      <h2>YOUR PROJECTS</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="sidebar-item">
            <button onClick={() => handleSelectProject(project)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
