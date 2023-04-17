import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Projects from "./components/pages/Blog";
import Resume from "./components/pages/Contact";
import Home from "./components/pages/Home";
// import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/footer";
import NavTabs from './components/NavTabs';

function App() {
  return (
    <BrowserRouter>
      <div>
      <NavTabs />
        {/* <PortfolioContainer /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
