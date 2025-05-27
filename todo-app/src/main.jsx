import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ProjectProvider from "./context/ProjectContext.jsx";
import ErrorProvider from "./context/ErrorContext.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorProvider>
    <AuthProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </AuthProvider>
  </ErrorProvider>
);
