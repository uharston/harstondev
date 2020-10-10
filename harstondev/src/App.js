import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark">
     <NavBar/>
     <Container className='content' fluid>
      <Welcome />
      <About />
      <Projects />
      <Contact />
      <Footer />
     </Container>
    </div>
  );
}

export default App;
