import { useContext, useState } from "react";
import Input from "./Input";
import { ProjectContext } from "../context/ProjectContext";
import { ErrorContext } from "../context/ErrorContext";

const ProjectDetails = ({ id, title, description, date, priority }) => {
  const [taskInput, setTaskInput] = useState("");
  const { addTask, projects } = useContext(ProjectContext);
  const { setError } = useContext(ErrorContext);

  function handleTask(e) {
    e.preventDefault();

    if (taskInput.trim().length === 0) {
      setError("Can not save empty task!");
      return;
    }
    const newTask = {
      id: Date.now(),
      title: taskInput,
    };

    addTask(id, newTask);
    setTaskInput("");
  }

  console.log(taskInput);

  const currProject = projects.find((project) => project.id === id);

  console.log(projects);
  return (
    <div className="dashboard">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Due Date: {date}</p>
      <p>Priority: {priority}</p>

      <form>
        <Input
          title="You can add tasks here:"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
        />
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
