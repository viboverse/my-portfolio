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
    <form action={formAction}>
      <Input label="Project Name" name="title" defaultValue="Learning React" />
      <Input label="Description" TextContainer="textarea" name="description" defaultValue="In here we gona explain what the project is about" />
      <Input label="Due Date" type="date" name="date" defaultValue="2025-05-27" />

      <label htmlFor="priority">Priority</label>
      <select id="priority" name="priority">
        <option value="Normal">Normal</option>
        <option value="High">High</option>
        <option value="Urgent">Urgent</option>
      </select>

      <button type="submit">Save</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default ProjectForm;
