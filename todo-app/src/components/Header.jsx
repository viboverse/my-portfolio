import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { username } = useContext(AuthContext);

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>My Project Manager</h1>
        <span className="header-welcome">Welcome{username ? `, ${username}` : ''}!</span>
      </div>
    </header>
  );
}
