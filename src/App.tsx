import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/kit/header";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";
import Home from "./home/page";
import About from "./about/page";

function App() {
  const location = useLocation(); // ✅ Use the hook

  return (
    <LenisProvider>
      <Header />

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* ✅ Use location.pathname safely */}
      <div key={location.pathname}>
        <Footer />
      </div>
    </LenisProvider>
  );
}

export default App;
