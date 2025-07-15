import React, {useRef, useState } from "react";
import Header from "../sharedSections/Header";
import Main from "../sharedSections/Main";
import AnalyticsBrochure from "../sharedSections/AnalyticsBrochure";
import CourseJourney from "../sharedSections/CourseJourney";
import PlansAnalytics from "../sharedSections/PlansAndPricing";
import Faq from "../sharedSections/Faq";

import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";

const DataAnalytics = () => {
  const footerRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Header />
      <Main
        setShowForm={setShowForm}
        title="Data Analytics Job Bootcamp with GenAI"
        subtitle="Get years ahead in just six months through practice-based learning and real-world projects."
        stats={[
          { value: "100%", label: "Live classes" },
          { value: "1200+", label: "Companies Hiring" },
          { value: "95%", label: "Placement rate" },
          { value: "1.5 L+", label: "Learners" },
        ]}
      />
      <AnalyticsBrochure />
      <CourseJourney
        footerRef={footerRef}
        showForm={showForm}
        setShowForm={setShowForm}
        courseName="Data Analytics"
         FaqComponent={Faq}
        PlansComponent={PlansAnalytics}
      />

      <Footer1 ref={footerRef} />
      <Footer2 />
    </div>
  );
};

export default DataAnalytics;
