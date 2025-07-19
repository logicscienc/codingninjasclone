import React, { useRef, useState } from "react";
import Header from "../sharedSections/Header";
import MainAdvanced from "./MainAdvanced";
import CourseJourney from "./CourseJourney";
import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";
import GenAIJourney from "./GenAIJourney";
import Benefits from "./Benefits";
 import Program from "./Program";
 import Callback from '../sharedSections/Callback';
 import BenefitsLearning from "./BenefitsLearning";
 import Faculty from "./Faculty";
 import LearnerBackground from "./LearnerBackground";
 import Plans from "./Plans";
import PlansAnalytics from "../sharedSections/PlansAndPricing";
import FaqSection from "./FaqSection.jsx";
import SlidingDrawer from "./SlidingDrawer"; 
import advancedtech from "../sharedSections/images/advancedtech.pdf";

const Advanced = () => {
  const footerRef = useRef(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false); 

  const handleCurriculumClick = () => {
    setDrawerOpen(true); 
  };

  const handleUnlockClick = () => {
    const html = `
      <html>
        <head><title>Curriculum</title></head>
        <body style="margin:0">
          <iframe src="${advancedtech}" width="100%" height="100%" style="border:none;"></iframe>
        </body>
      </html>
    `;
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.open();
      newWindow.document.write(html);
      newWindow.document.close();
    }
  };

  return (
    <div>
      <Header />

      <MainAdvanced
        onUnlockClick={handleUnlockClick}
        stats={[
          { value: "1:1", label: "Doubt support" },
          { value: "100%", label: "Live Classes" },
          { value: "10+", label: "Hands-on projects" },
        ]}
      />

      <CourseJourney />

      <GenAIJourney onUnlockClick={handleCurriculumClick} /> 

      <Benefits handleCurriculumClick={handleCurriculumClick} /> 
      <Program/> 
      <BenefitsLearning/>
      <Faculty  handleCurriculumClick={handleCurriculumClick}/>
      <LearnerBackground  handleCurriculumClick={handleCurriculumClick}/>
      <Plans/>
      <Callback/>
      <FaqSection handleCurriculumClick={handleCurriculumClick}/>
      
      <SlidingDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        brochureLink={advancedtech}
      />
      

      <Footer1 ref={footerRef} />
      <Footer2 />
    </div>
  );
};

export default Advanced;

