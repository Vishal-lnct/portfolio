import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Project from './components/Project';
import Skill from './components/Skill';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"           element={<Home />}        />
        <Route path="/about"      element={<About />}       />
        <Route path="/experience" element={<Experience />}  />
        <Route path="/skill"      element={<Skill />}       />
        <Route path="/project"    element={<Project />}     />
        <Route path="/contact"    element={<Contact />}     />
        <Route path="/form"       element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;