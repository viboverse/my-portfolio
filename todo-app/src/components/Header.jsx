import { use, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContex';

export default function Header() {
  const { username } = use(AuthContext);

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <h1>My Todo App</h1>
      <h4>Wellcome {username}</h4>
    </header>
  );
}
