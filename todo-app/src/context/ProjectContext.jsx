import { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects: [],
  selectedProject: null,
  creatingProject: false,
  setCreatingProject: () => {},
  addProject: () => {},
  setSelectedProject: () => {},
  addTask: () => {},
});

export default function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [creatingProject, setCreatingProject] = useState(false);

  function addProject(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

  function addTask(projectId, task) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, task] }
          : project
      )
    );
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProject,
        creatingProject,
        setCreatingProject,
        addProject,
        setSelectedProject,
        addTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
