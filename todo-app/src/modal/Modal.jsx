import { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";
import "./Modal.css";

export default function Modal() {
  const { error, clearError } = useContext(ErrorContext);

  if (!error) return null;

  return (
    <div className="modal-backdrop" onClick={clearError}>
      <dialog open className="modal-error" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Error</h2>
        <p className="modal-message">{error}</p>
        <button className="modal-btn" onClick={clearError}>
          OK
        </button>
      </dialog>
    </div>
  );
}
