import React, {useState} from 'react'
import Header from './Header';
import Main from './Main'
import Duration from './Duration';
import Succeed from './Succeed';
import CallbackDrawer from './CallbackDrawer';
import CertificateSection from '../webdevelopment/CertificateSection';
import Career from '../webdevelopment/Career';
import FaqSection from '../trainingandinternship/FaqSection';
import Footer from '../trainingandinternship/Footer';
import ProgramModules from './ProgramModules';
import Carasol from './Carasol';
import ProgramFee from './ProgramFee';

const Academy = () => {
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
     <Succeed onCallbackClick={handleCallbackClick}/>
      <CallbackDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
      <CertificateSection/>
      <ProgramModules/>
      <Carasol/>
      <ProgramFee/>
      <Career/>
      <FaqSection/>
      <Footer/>
    </>
   
  )
}

export default Academy
