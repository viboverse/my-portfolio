import { createContext, useEffect, useState } from "react";

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
    const storedLoginState = localStorage.getItem("isLoggedIn");

    if (storedLoginState === "true") {
      setIsLoggedIn(true);
    }
  });

  function login() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setUsername(null);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, setUsername, username }}
    >
      {children}
    </AuthContext.Provider>
  );
}
