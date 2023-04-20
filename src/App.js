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
import NotFound from './components/pages/NotFound';

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
