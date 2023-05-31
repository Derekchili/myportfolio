import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Footer from "./Footer";
import NavTabs from './NavTabs';
import MyPortfolio from './pages/MyPortfolio';


function App() {
  return (
    <div className='flex flex-col px-5 py-1 h-screen bg-gradient-to-r from-blue-500 to-grey-900 '>
      <BrowserRouter>
        <header className='h-20 justify-center m4 bg-gradient-to-r from-blue-500 to-grey-900'>         
          <NavTabs />
        </header>
    
        <main className='h-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyPortfolio" element={<MyPortfolio />} />
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
