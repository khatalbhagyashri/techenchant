import "./App.css";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import WebDevService from "./Pages/WebDevSevice";
import SEOService from "./Pages/SEOService";
import DesignService from "./Pages/DesignService";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <div className="w-full h-auto">
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-dev" element={<WebDevService />} />
        <Route path="/seo" element={<SEOService />} />
        <Route path="/design" element={<DesignService />} />
      </Routes>
    </div>
  );
}

export default App;
