import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: [],
  selectedProject: null,
  addProject: () => {},
  setSelectedProject: () => {},
});

export default function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function addProject(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

  return (
    <ProjectContext.Provider
      value={{ projects, selectedProject, addProject, setSelectedProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
