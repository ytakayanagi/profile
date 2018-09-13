import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
