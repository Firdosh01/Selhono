import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
    </div>
  );
}

export default App;
