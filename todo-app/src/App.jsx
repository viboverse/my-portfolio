import Authentication from "./components/Authentication";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import DashBoard from "./components/Dashboard";
import { ProjectContext } from "./context/project-context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const { projects } = useContext(ProjectContext);
  console.log(projects);

  return (
    <div className="main-content">
      <header>
        <h1>My Todo App</h1>
      </header>
      <main>{!isLoggedIn ? <Authentication /> : <DashBoard />}</main>
    </div>
  );
}

export default App;
