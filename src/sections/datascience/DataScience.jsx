import React, {useState, useRef} from "react";
import Header from "./Header";
import Main from "./Main";
import Carriculum from "./Carriculum";
import Academy from "./Acedamy";
import GenAIJourney from "./GenAIJourney";
import Program from '../advanced/Program';
import BenefitsLearning from '../advanced/BenefitsLearning';
import TrustAndLove from "./TrustAndLove";
import SlidingDrawer from "../advanced/SlidingDrawer";
import advancedtech from "../sharedSections/images/advancedtech.pdf";
import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";
import Faculty from "../advanced/Faculty";
import LearnerBackground from "../advanced/LearnerBackground";
import Callback from "../sharedSections/Callback";
import FaqSection from "./FaqSection";
import Plans from '../sharedSections/Plans';

const DataScience = () => {
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
      <Main
       onUnlockClick={handleUnlockClick}
        stats={[
          { value: "9", label: "Months" },
          { value: "1:1", label: "Doubt support" },
          { value: "20", label: "Expert Sessions" },
           { value: "12+", label: "Projects" },
        ]}
      />
      <Carriculum/>
      <Academy  handleCurriculumClick={handleCurriculumClick}/>
       <GenAIJourney onUnlockClick={handleCurriculumClick} />
       <Program/>
       <BenefitsLearning/>
       <TrustAndLove   handleCurriculumClick={handleCurriculumClick}/>
       <Faculty  handleCurriculumClick={handleCurriculumClick}/>
       <LearnerBackground  handleCurriculumClick={handleCurriculumClick}/>
       <Plans/>
       <Callback/>
       <FaqSection   handleCurriculumClick={handleCurriculumClick}/>

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

export default DataScience;
