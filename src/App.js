
import React from 'react';
import Header from './components/common/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
