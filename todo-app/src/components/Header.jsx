import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContex';

export default function Header() {
  const { username } = useContext(AuthContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>My Project Manager</h1>
        <span className="header-welcome">Welcome{username ? `, ${username}` : ''}!</span>
      </div>
      <div className="header-right">
        <button className="theme-toggle-btn" onClick={toggleDarkMode}>
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  );
}
