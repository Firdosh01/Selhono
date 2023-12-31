import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
