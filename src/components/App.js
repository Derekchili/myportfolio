import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Resume from "./pages/Resume";
import Footer from "./Footer";
import NavTabs from './NavTabs'




function App() {
  return (
    <div className='flex flex-col px-3 py-2 h-screen bg-light-blue'>
      <BrowserRouter>
        <header>         
          <NavTabs />
        </header>
        {/* <Header /> */}
        <main className='h-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
