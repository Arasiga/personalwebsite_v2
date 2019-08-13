import React, { Component } from 'react';
import './App.css';
import Landing from "./components/landing";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from './components/navbar';

class App extends Component {

  state = {
    width: window.innerWidth
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects screenWidth={this.state.width} />
      <Contact />
    </div>
    );
  }
}

export default App;
