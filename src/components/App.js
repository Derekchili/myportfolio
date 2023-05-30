import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Footer from "./Footer";
import NavTabs from './NavTabs'




function App() {
  return (
    <div className='flex flex-grow justify-center m-4 h-screen bg-blue-200'>
      <BrowserRouter>
        <header className='flex justify-center m4 bg-blue-400'>         
          <NavTabs />
        </header>
    
        <main className='flex justify-center h-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
