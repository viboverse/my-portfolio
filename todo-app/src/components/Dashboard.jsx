import { useContext } from "react";
import NewProject from "./NewProject";
import ProjectsSideBar from "./ProjectsSideBar";
import { ProjectContext } from "../context/project-context";
import ProjectDetails from "./ProjectDetails";

function DashBoard() {
  const { selectedProject } = useContext(ProjectContext);

  return (
    <>
      <ProjectsSideBar />
      <div className="dashboard">
        {!selectedProject ? (
          <NewProject />
        ) : (
          <ProjectDetails
            key={selectedProject.id}
            title={selectedProject.title}
            description={selectedProject.description}
            date={selectedProject.date}
            priority={selectedProject.priority}
          />
        )}
      </div>
    </>
  );
}

export default DashBoard;
