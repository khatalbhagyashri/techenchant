import "./App.css";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import WebDevService from "./Pages/WebDevSevice";
import SEOService from "./Pages/SEOService";
import DesignService from "./Pages/DesignService";
import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";


function App() {
  return (
    <div className="w-full h-auto">
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/services/web-dev" element={<WebDevService />} />
        <Route path="/services/seo" element={<SEOService />} />
        <Route path="/services/design" element={<DesignService />} />
      </Routes>
    </div>
  );
}

export default App;
