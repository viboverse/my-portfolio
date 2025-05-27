import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { AuthContext } from "../context/AuthContext";

export default function ProjectsSidebar({ onShowForm }) {
  const { projects, setSelectedProject } = useContext(ProjectContext);
  const { logout } = useContext(AuthContext);

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  function handleShowProjectForm() {
    onShowForm();
  }

  return (
    <div className="sidebar">
      <h2>YOUR PROJECTS</h2>
      <button onClick={handleShowProjectForm}>Add More Projects</button>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="sidebar-item">
            <button onClick={() => handleSelectProject(project)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>

      <div onClick={logout}>
        <button>Logout</button>
      </div>
    </div>
  );
}
