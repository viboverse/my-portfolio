import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvider from './context/AuthContext.jsx';
import ProjectProvider from './context/ProjectContext.jsx';
import ErrorProvider from './context/ErrorContext.jsx';
import ThemeProvider from './context/ThemeContex.jsx';

createRoot(document.getElementById('root')).render(
  <ErrorProvider>
    <AuthProvider>
      <ThemeProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </ThemeProvider>
    </AuthProvider>
  </ErrorProvider>
);
