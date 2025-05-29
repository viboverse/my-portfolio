import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import DashBoard from './components/Dashboard';
import Auth from './components/Auth';
import Modal from './modal/Modal';
import './App.css';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="main-content">
      <Modal />
      <main>{!isLoggedIn ? <Auth /> : <DashBoard />}</main>
    </div>
  );
}

export default App;
