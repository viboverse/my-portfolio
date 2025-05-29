import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  username: null,
  setUsername: () => {},
});

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  function login(name) {
    setIsLoggedIn(true);
    setUsername(name);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', name);
  }

  function logout() {
    setIsLoggedIn(false);
    setUsername(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }

  return <AuthContext.Provider value={{ isLoggedIn, login, logout, setUsername, username }}>{children}</AuthContext.Provider>;
}
