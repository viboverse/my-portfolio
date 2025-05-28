import { useActionState, useContext } from 'react';
import Input from './Input';
import { ProjectContext } from '../context/ProjectContext';
import { ErrorContext } from '../context/ErrorContext';
import { isNotEmpty } from '../util/validation';

function ProjectForm({ onSuccess }) {
  const { addProject } = useContext(ProjectContext);
  const { setError } = useContext(ErrorContext);

  function projectAction(prevState, formData) {
    const title = formData.get('title');
    const description = formData.get('description');
    const date = formData.get('date');
    const priority = formData.get('priority');

    if (!isNotEmpty(title)) {
      setError('Title cannot be empty!');
      return;
    }

    const enteredProject = {
      id: Date.now(),
      title,
      description,
      date,
      priority,
      tasks: [],
    };

    console.log(enteredProject);

    addProject(enteredProject);

    onSuccess();
    return enteredProject;
  }

  const initialState = {
    title: '',
    description: '',
    date: '',
    priority: '',
  };

  const [formState, formAction] = useActionState(projectAction, initialState);

  return (
    <form action={formAction} className="project-form-modern">
      <h2 className="project-form-title">Create New Project</h2>
      <div className="project-form-fields">
        <Input label="Project Name" name="title" placeholder="e.g. Learning React" />
        <Input label="Description" TextContainer="textarea" name="description" placeholder="What is this project about?" />
        <Input label="Due Date" type="date" name="date" min="2025-05-28" />
        <div className="project-form-group">
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority">
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
      </div>
      <div className="project-form-actions">
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default ProjectForm;

/* Add styles for modern form */
/* Place this in your index.css or App.css for global effect */
