import { useContext, useState } from "react";
import Input from "./Input";
import { ProjectContext } from "../context/ProjectContext";
import { AuthContext } from "../context/AuthContext";

export default function ProjectsSidebar({ onShowForm }) {
  const [search, setSearch] = useState("");
  const { projects, setSelectedProject } = useContext(ProjectContext);
  const { logout } = useContext(AuthContext);

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  function handleShowProjectForm() {
    onShowForm();
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sidebar">
      <h2>YOUR PROJECTS</h2>
      <Input
        type="search"
        label="Search"
        placeholder="Find the projects..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={handleShowProjectForm}>Add More Projects</button>
      <ul>
        {filteredProjects.map((project) => (
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
