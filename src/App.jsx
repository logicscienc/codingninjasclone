
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/home/Home";
import FullStack from "./sections/fullstack/FullStack";

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<FullStack />} />
      </Routes>
    
  );
};

export default App;

