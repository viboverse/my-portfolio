import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import ProjectDetails from './ProjectDetails';
import ProjectForm from './ProjectForm';
import ProjectsSidebar from './ProjectsSidebar';
import Header from './Header';
import { IoAddCircle } from 'react-icons/io5';

function DashBoard() {
  const { selectedProject, creatingProject, setCreatingProject } = useContext(ProjectContext);

  return (
    <>
      <Header />
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
          <button className="new-project-btn" onClick={() => setCreatingProject(true)}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em' }}>
              <IoAddCircle size={22} /> Create A Project
            </span>
          </button>
        )}
      </div>
    </>
  );
}

export default DashBoard;
