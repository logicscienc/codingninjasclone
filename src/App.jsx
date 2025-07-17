
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/home/Home";
import FullStack from "./sections/fullstack/FullStack";
import DataAnalytics from "./sections/dataanalytics/DataAnalytics";
import Advanced from "./sections/advanced/Advanced";
import Taldsa from './sections/trainingandinternship/TaIdsa'
import Enrollement from './sections/trainingandinternship/Enrollement';
import WebDevelopment from "./sections/webdevelopment/WebDevelopment";
import Enroll from './sections/webdevelopment/Enrollement';
import Enr from './sections/academy/Enrollement';
import Academy from './sections/academy/Academy'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    // <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullstack" element={<FullStack />} />
           <Route path="/dataanalytics" element={<DataAnalytics />} />
           <Route path="/advanced" element={<Advanced/>} />
           <Route path="/trainingandplacement" element={<Taldsa/>} />
           <Route path="/enrollement" element={<Enrollement />} />
          <Route path="/webdevelopment" element={<WebDevelopment/>} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/academy" element={<Academy/>} />
          <Route path="/enr" element={<Enr />} />

        </Routes>

        {/* Toast container to show notifications globally */}
        <ToastContainer position="top-center" />
      </>
    
  );
};

export default App;


