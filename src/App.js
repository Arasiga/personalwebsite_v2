import React from 'react';

import './App.css';
import Landing from "./components/landing";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from './components/navbar';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
