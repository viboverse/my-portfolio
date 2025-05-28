import { useContext, useState } from 'react';
import Input from './Input';
import { ProjectContext } from '../context/ProjectContext';
import { AuthContext } from '../context/AuthContext';

export default function ProjectsSidebar({ onShowForm }) {
  const [search, setSearch] = useState('');
  const { projects, setSelectedProject, setCreatingProject } = useContext(ProjectContext);
  const { logout } = useContext(AuthContext);

  function handleSelectProject(project) {
    setSelectedProject(project);
    setCreatingProject(false);
  }

  function handleShowProjectForm() {
    onShowForm();
  }

  const filteredProjects = projects.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="sidebar">
      <h2>YOUR PROJECTS</h2>
      <Input type="search" label="Search" placeholder="Find the projects..." onChange={(e) => setSearch(e.target.value)} value={search} />
      <button className="new-project-btn" onClick={handleShowProjectForm}>
        Create New Project
      </button>
      <span className="new-project-helper">Start a new project to organize your tasks.</span>
      <ul className="sidebar-projects-list">
        {filteredProjects.map((project) => (
          <li key={project.id} className="sidebar-item">
            <button className="sidebar-project-btn" onClick={() => handleSelectProject(project)}>
              <span className="sidebar-project-dot" />
              <span className="sidebar-project-title">{project.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="sidebar-logout">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
