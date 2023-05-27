import React from 'react';
import Header from './components/common/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/common/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Hello</h1>
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
