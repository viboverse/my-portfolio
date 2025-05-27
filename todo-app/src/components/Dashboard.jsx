import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import ProjectDetails from "./ProjectDetails";
import ProjectForm from "./ProjectForm";
import ProjectsSidebar from "./ProjectsSidebar";
import Modal from "../modal/Modal";

function DashBoard() {
  const { selectedProject, creatingProject, setCreatingProject } =
    useContext(ProjectContext);

  return (
    <>
      <Modal />
      <ProjectsSidebar onShowForm={() => setCreatingProject(true)} />
      <div className="dashboard">
        {creatingProject ? (
          <ProjectForm onSuccess={() => setCreatingProject(false)} />
        ) : selectedProject ? (
          <ProjectDetails
            key={selectedProject.id}
            id={selectedProject.id}
            title={selectedProject.title}
            date={selectedProject.date}
            description={selectedProject.description}
            priority={selectedProject.priority}
          />
        ) : (
          <button onClick={() => setCreatingProject(true)}>
            Create A Project
          </button>
        )}
      </div>
    </>
  );
}

export default DashBoard;
