import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/kit/header";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";
import Home from "./home/page";
import About from "./about/page";
import Vacancies from "./vacancies/page";
import Pricing from "./pricing/page";
import Contact from "./contact/page";
import Blog from "./blog/page";
import BlogDetail from "./blog/blog-detail/page";

function App() {
  const location = useLocation(); // ✅ Use the hook

  return (
    <LenisProvider>
      <Header />

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

      {/* ✅ Use location.pathname safely */}
      <div key={location.pathname}>
        <Footer />
      </div>
    </LenisProvider>
  );
}

export default App;
