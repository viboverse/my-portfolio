import { useContext, useState } from 'react';
import Input from './Input';
import { ProjectContext } from '../context/ProjectContext';
import { ErrorContext } from '../context/ErrorContext';
import Modal from '../modal/Modal';
import Task from './Task';

const ProjectDetails = ({ id, title, description, date, priority }) => {
  const [taskInput, setTaskInput] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { addTask, projects, onDeleteProject, setSelectedProject, onDeleteTask } = useContext(ProjectContext);
  const { setError } = useContext(ErrorContext);

  function handleTask(e) {
    e.preventDefault();

    if (taskInput.trim().length === 0) {
      setError('Can not save empty task!');
      return;
    }
    const newTask = {
      id: Date.now(),
      title: taskInput,
    };

    addTask(id, newTask);
    setTaskInput('');
  }

  // Show confirmation modal
  function handleDeleteProject() {
    setShowConfirmModal(true);
  }

  // Confirm deletion
  function handleConfirmDelete() {
    onDeleteProject(id);
    setSelectedProject(null);
    setShowConfirmModal(false);
  }

  // Cancel deletion
  function handleCancelDelete() {
    setShowConfirmModal(false);
  }

  const currProject = projects.find((project) => project.id === id);

  return (
    <div className="project-details-card">
      {showConfirmModal && (
        <Modal
          errorTitle="Are you sure?"
          error="Do you really want to delete this project?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      <div className="project-details-header">
        <span className="project-details-title">{title}</span>
        <button className="project-details-delete-btn" onClick={handleDeleteProject}>
          Delete
        </button>
      </div>
      <div className="project-details-meta">
        <span>Due: {date}</span>
        <span>Priority: {priority}</span>
      </div>
      <div className="project-details-desc" style={{ textAlign: 'left' }}>
        Description: {description}
      </div>
      <form onSubmit={handleTask}>
        <Input label="You can add tasks here:" value={taskInput} onChange={(event) => setTaskInput(event.target.value)} />
        <button type="submit">Save</button>
      </form>
      <div className="project-details-tasks">
        <h3>Tasks</h3>
        <ul className="project-details-tasks-list">
          {currProject?.tasks.map((task) => (
            <Task key={task.id} task={task.title} onRemove={() => onDeleteTask(id, task.id)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
