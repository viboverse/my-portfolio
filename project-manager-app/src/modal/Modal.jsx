import { useContext } from 'react';
import { ErrorContext } from '../context/ErrorContext';
import './Modal.css';

export default function Modal({ errorTitle, error, onConfirm, onCancel }) {
  const { error: contextError, clearError } = useContext(ErrorContext);

  const isConfirmation = onConfirm && onCancel;

  if (!isConfirmation && !contextError) return null;

  return (
    <div className="modal-backdrop" onClick={isConfirmation ? onCancel : clearError}>
      <dialog open className="modal-error" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{errorTitle}</h2>
        <p className="modal-message">{error || contextError}</p>
        {isConfirmation ? (
          <>
            <button className="modal-btn" onClick={onConfirm}>
              Confirm
            </button>
            <button className="modal-btn" onClick={onCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button className="modal-btn" onClick={clearError}>
            OK
          </button>
        )}
      </dialog>
    </div>
  );
}
