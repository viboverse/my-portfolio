import { createContext, useState } from "react";

export const ErrorContext = createContext({
  error: null,
  setError: () => {},
  clearError: () => {},
});

export default function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  function clearError() {
    setError(null);
  }

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}
