import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./heroSection";
import Navbar from "./navBar";
import Project from "./project";
import Contact from "./contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
