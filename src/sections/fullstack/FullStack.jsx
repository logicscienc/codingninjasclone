import React, { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Main from "./Main";
import Carousel from "./Carousel";
import CourseJourney from "./CourseJourney";

import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";

const FullStack = () => {
  const footerRef = useRef(null);
  const [showForm, setShowForm] = useState(false); 

  return (
    <>
      <Header />
      
      <Main setShowForm={setShowForm} /> 
      <Carousel />
      <CourseJourney footerRef={footerRef} showForm={showForm} setShowForm={setShowForm} />
      {/* <Callback/> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Footer1 ref={footerRef} />
      <Footer2 />
    </>
  );
};

export default FullStack;

