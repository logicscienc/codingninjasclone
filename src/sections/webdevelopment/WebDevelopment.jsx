import React, {useState} from 'react';
import Header from './Header';
import Main from './Main'
import Duration from './Duration'
import Succeed from './Succeed';
import CallbackDrawer from './CallbackDrawer';
import CertificateSection from './CertificateSection';
import ProgramModules from './ProgramModules';
import Career from './Career';
import FaqSection from '../trainingandinternship/FaqSection';
import Footer from '../trainingandinternship/Footer';
import ProgramFee from './ProgramFee';

const WebDevelopment = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
   const handleEnrollClick = () => {
    navigate('/enroll');
  };

  const handleCallbackClick = () => {
    setIsDrawerOpen(true);
  };
  return (
    <>
    <Header/>
    <Main/>
    <Duration/>
    <Succeed  onCallbackClick={handleCallbackClick}/>
     <CallbackDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
      <CertificateSection/>
      <ProgramModules/>
      <Career/>
      <ProgramFee/>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default WebDevelopment
