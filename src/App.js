import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Projects from "./components/pages/Blog";
import Resume from "./components/pages/Contact";
import Home from "./components/pages/Home";
// import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/footer";
import NavTabs from './components/NavTabs';
import Recommendations from './components/pages/Recommendations';
import LOR1 from './components/pages/lor-1';
import LOR2 from './components/pages/lor-2';
import LOR3 from './components/pages/lor-3';
import NotFound from './components/pages/NotFound';
import CSR from './components/pages/CSR-update';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/lor-1" element={<LOR1 />} />
          <Route path="/lor-2" element={<LOR2 />} />
          <Route path="/lor-3" element={<LOR3 />} />
          <Route path="/csr-update" element={<CSR />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
