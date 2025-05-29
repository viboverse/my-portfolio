export default function Task({ task, onRemove }) {
  return (
    <li className="task-item">
      <span className="task-title">{task}</span>
      <button className="task-remove-btn" onClick={() => onRemove(task.id)} aria-label="Remove task">
        ✕
      </button>
    </li>
  );
}
