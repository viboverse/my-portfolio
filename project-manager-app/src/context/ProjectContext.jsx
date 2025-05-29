import { useState, createContext } from 'react';

export const ProjectContext = createContext({
  projects: [],
  selectedProject: null,
  creatingProject: false,
  setCreatingProject: () => {},
  setSelectedProject: () => {},
  addProject: () => {},
  onDeleteProject: () => {},
  addTask: () => {},
  onDeleteTask: () => {},
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
      prevProjects.map((project) => (project.id === projectId ? { ...project, tasks: [...project.tasks, task] } : project))
    );
  }

  function onDeleteProject(id) {
    setProjects((prevProjects) => prevProjects.filter((p) => p.id !== id));
    setSelectedProject(null);
  }

  function onDeleteTask(projectId, taskId) {
    setProjects((prevProjects) =>
      prevProjects.map((project) => (project.id === projectId ? { ...project, tasks: project.tasks.filter((task) => task.id !== taskId) } : project))
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
        onDeleteProject,
        onDeleteTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
