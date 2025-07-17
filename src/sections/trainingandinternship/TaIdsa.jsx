import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Duration from './Duration';
import Succeed from './Succeed';
import CallbackDrawer from './CallbackDrawer';
import CertificateSection from './CertificateSection';
import ProgramModules from './ProgramModules'
import Career from './Career';
import ProgramFee from './ProgramFee';
import FaqSection from './FaqSection';
import Footer from './Footer';


const TaIdsa = () => {
   const navigate = useNavigate();
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleEnrollClick = () => {
    navigate('/enrollement');
  };
   const handleCallbackClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
    <Header/>
     <Main/> 
     <Duration/>
     <Succeed onEnrollClick={handleEnrollClick} onCallbackClick={handleCallbackClick}/>
     <CallbackDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
      <CertificateSection/>
      <ProgramModules/>
      <Career/>
      <ProgramFee  onEnrollClick={handleEnrollClick}/>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default TaIdsa
