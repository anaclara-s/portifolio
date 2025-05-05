import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import Header from "./components/Header";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

import './App.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
    []);

  return (
    <>
      <Header />
      <div id="inicio" style={{ scrollMarginTop: "90px" }}><Home /></div>
      <div id="sobre" style={{ scrollMarginTop: "90px" }}><About /></div>
      <div id="habilidades" style={{ scrollMarginTop: "90px" }}><Skills /></div>
      <div id="projetos" style={{ scrollMarginTop: "90px" }}><Projects /></div>
      <div id="contato" style={{ scrollMarginTop: "90px" }}><Contacts /></div>
    </>
  );
}

export default App;


