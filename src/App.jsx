
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/home/Home";
import FullStack from "./sections/fullstack/FullStack";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    // <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullstack" element={<FullStack />} />
        </Routes>

        {/* Toast container to show notifications globally */}
        <ToastContainer position="top-center" />
      </>
    
  );
};

export default App;


