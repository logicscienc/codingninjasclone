import React, {useState, useRef} from 'react';
import Header from './Header';
import SlidingDrawer from './SlidingDrawer';
import { Toaster } from "react-hot-toast";
import Main from './Main';
import IndustrySection from './IndustrySection';
import CertificateHighlight from './CertificateHighlight';
import JourneySupport from './JourneySupport';
import CareerServices from './CareerServices';
import CoursePricing from './CoursePricing';
import Callback from './Callback';
import FaqSection from './FaqSection';
import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";

const Online = () => {
  const footerRef = useRef(null);
     const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <Header  onDownloadClick={() => setDrawerOpen(true)} />
        <Main/>
        <IndustrySection/>
        <CertificateHighlight onDownloadClick={() => setDrawerOpen(true)}/>
          <JourneySupport/>
          <CareerServices onDownloadClick={() => setDrawerOpen(true)}/>
            <CoursePricing/>
            <Callback/>
            <FaqSection/>

             <Footer1 ref={footerRef} />
      <Footer2 />
            

        <SlidingDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default Online
