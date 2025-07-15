import React, { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../sharedSections/Header";
import Main from "../sharedSections/Main";
import Carousel from "../sharedSections/Carousel";
import CourseJourney from "../sharedSections/CourseJourney";
import Faq from "../sharedSections/Faq";
import Plans from "../sharedSections/Plans"

import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";

const FullStack = () => {
  const footerRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />

      <Main
        setShowForm={setShowForm}
        title="Full Stack Web Development Job Bootcamp with GenAI"
        subtitle="Choose MERN stack or Spring Boot and acquire expertise through practical application and real-world projects."
        stats={[
          { value: "95%", label: "placement rate" },
          { value: "1200+", label: "Companies Hiring" },
          { value: "128%", label: "Average hike" },
          { value: "1.5 L+", label: "Learners" },
        ]}
      />
      <Carousel />
      <CourseJourney
        footerRef={footerRef}
        showForm={showForm}
        setShowForm={setShowForm}
        courseName="Web Development"
        FaqComponent={Faq}
        PlansComponent={Plans}
      />
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
