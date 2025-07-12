import React from "react";
import Header from "./Header"; // This is the fullstack-specific header
 import Main from "./Main";
 import Carousel from "./Carousel";
// import Instructors from "./Instructors";
// import Footer1 from "../../components/Footer1";
// import Footer2 from "../../components/Footer2";

const FullStack = () => {
  return (
    <>
      <Header />
      <Main/>
      <Carousel/>
     
    </>
  );
};

export default FullStack;
