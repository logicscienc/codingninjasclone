import React, { useRef } from "react";
import Header from "./Header"; // This is the fullstack-specific header
 import Main from "./Main";
 import Carousel from "./Carousel";
import CourseJourney from "./CourseJourney";
 import Footer1 from "../../components/Footer1";
 import Footer2 from "../../components/Footer2";

const FullStack = () => {
   const footerRef = useRef(null);
  return (
    <>
      <Header />
      <Main/>
      <Carousel/>
      <CourseJourney  footerRef={footerRef}/>
      <Footer1  ref={footerRef}/>
      <Footer2/>

     
    </>
  );
};

export default FullStack;
