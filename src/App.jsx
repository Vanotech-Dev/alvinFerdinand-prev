import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./heroSection";
import Navbar from "./navBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
