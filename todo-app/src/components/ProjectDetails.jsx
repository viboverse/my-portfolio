import { useContext, useState } from 'react';
import Input from './Input';
import { ProjectContext } from '../context/ProjectContext';
import { ErrorContext } from '../context/ErrorContext';
import Modal from '../modal/Modal';

const ProjectDetails = ({ id, title, description, date, priority }) => {
  const [taskInput, setTaskInput] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { addTask, projects, onDelete, setSelectedProject } = useContext(ProjectContext);
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
    onDelete(id);
    setSelectedProject(null);
    setShowConfirmModal(false);
  }

  // Cancel deletion
  function handleCancelDelete() {
    setShowConfirmModal(false);
  }

  const currProject = projects.find((project) => project.id === id);

  return (
    <div className="dashboard">
      {showConfirmModal && (
        <Modal
          errorTitle="Are you sure?"
          error="Do you really want to delete this project?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Due Date: {date}</p>
      <p>Priority: {priority}</p>

      <button onClick={handleDeleteProject}>Delete</button>

      <form>
        <Input label="You can add tasks here:" value={taskInput} onChange={(event) => setTaskInput(event.target.value)} />
        <button onClick={handleTask}>Save</button>
      </form>

      <ul>
        {currProject?.tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
