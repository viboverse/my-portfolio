import Authentication from "./components/Auth";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import DashBoard from "./components/Dashboard";
import Auth from "./components/Auth";
import Modal from "./modal/Modal";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="main-content">
      <header>
        <h1>My Todo App</h1>
      </header>
      <Modal />
      <main>{!isLoggedIn ? <Auth /> : <DashBoard />}</main>
    </div>
  );
}

export default App;
