import { useState } from "react";
import ProjectForm from "./ProjectForm";

export default function NewProject() {
  const [isFormVisible, setFormIsVisible] = useState(false);

  function handleFormVisible() {
    setFormIsVisible(true);
  }

  let content = (
    <>
      <h2>You can create a project here</h2>
      <button onClick={handleFormVisible}>Create a new project</button>
    </>
  );
  return <>{isFormVisible ? <ProjectForm /> : content}</>;
}
