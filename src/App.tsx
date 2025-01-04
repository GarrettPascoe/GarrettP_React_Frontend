import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import About from "./components/pages/About";
import Links from "./components/pages/Links";
import ClickSearch from "./components/pages/ClickSearch";
import ImageClassification from "./components/pages/ImageClassification";
import WebApp from "./components/pages/WebApp";
import LandingPagePortrait from "./components/pages/LandingPagePortrait";
import LandingPage from "./components/pages/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/About" element={<About />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/ClickSearch" element={<ClickSearch />} />
        <Route path="/ImageClassification" element={<ImageClassification />} />
        <Route path="/WebApp" element={<WebApp />} />
        <Route path="/LandingPagePortrait" element={<LandingPagePortrait />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
