import './App.css'
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Skills from "./pages/skills/Skills"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/contato" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;


