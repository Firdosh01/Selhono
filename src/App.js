import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Team from './pages/Team';
import ServiceDetails from './pages/ServiceDetails';
import TeamDetails from './pages/TeamDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services/' element={<Services />} />
        <Route path='/services/:name' element={<ServiceDetails />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/our-projects/' element={<Project />} />
        <Route path='/blog/' element={<Blog />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/our-team/:id'  element={<TeamDetails />} />
        <Route path='/contact-us/' element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
