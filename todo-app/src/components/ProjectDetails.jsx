const ProjectDetails = ({ title, description, date, priority }) => {
  return (
    <div className="dashboard">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Due Date: {date}</p>
      <p>Priority: {priority}</p>
    </div>
  );
};

export default ProjectDetails;
