import { useActionState, useContext } from "react";
import Input from "./Input";
import { ProjectContext } from "../context/project-context";

function ProjectForm() {
  const { addProject } = useContext(ProjectContext);

  function projectAction(prevState, formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const priority = formData.get("priority");

    console.log(title, description, date, priority);

    const enteredProject = {
      id: Date.now(),
      title,
      description,
      date,
      priority,
    };

    addProject(enteredProject);

    return enteredProject;
  }

  const initialState = {
    title: "",
    description: "",
    date: "",
    priority: "",
  };

  const [formState, formAction] = useActionState(projectAction, initialState);

  return (
    <form action={formAction}>
      <Input title="Project Name" name="title" />
      <Input title="Description" TextContainer="textarea" name="description" />
      <Input title="Due Date" type="date" name="date" />

      <label htmlFor="priority">Priority</label>
      <select id="priority" name="priority">
        <option>Normal</option>
        <option>High</option>
        <option>Urgent</option>
      </select>

      <button type="submit">Save</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default ProjectForm;
