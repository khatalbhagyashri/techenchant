import "./App.css";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-auto">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
