import React, {useRef, useState} from 'react'
import Header from "../sharedSections/Header";
import Main from "../sharedSections/MainAdvanced";
import MainAdvanced from '../sharedSections/MainAdvanced';
import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";
import CourseJourney from "../sharedSections/CourseJourney";
import PlansAnalytics from "../sharedSections/PlansAndPricing";
import Faq from "../sharedSections/Faq";
import advancedtech from "../sharedSections/images/advancedtech.pdf";
import advance from "../sharedSections/images/advance.pdf";

const Advanced = () => {
   const footerRef = useRef(null);

    const handleUnlockClick = () => {
    const html = `
      <html>
        <head><title>Curriculum</title></head>
        <body style="margin:0">
          <iframe src="${advancedtech}" width="100%" height="100%" style="border:none;"></iframe>
        </body>
      </html>
    `;
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(html);
      newWindow.document.close();
    }
  };
   
  return (
    <div>
       <Header />
        <MainAdvanced
        stats={[
          { value: "1:1", label: "Doubt support" },
          { value: "100%", label: "Live Classes" },
          { value: "10+", label: "Hands-on projects" },
        
        ]}
      />
      {/* <CourseJourney
        footerRef={footerRef}
         FaqComponent={Faq}
        PlansComponent={PlansAnalytics}
         buttonLabel="Unlock Curriculum"
        onButtonClick={handleUnlockClick}
      /> */}

       <Footer1 ref={footerRef} />
      <Footer2 />
    </div>
  )
}

export default Advanced;
