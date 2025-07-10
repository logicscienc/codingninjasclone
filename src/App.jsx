import React from 'react'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import AlumniSection from './components/AlumniSection';
import NinjasAtTopCompanies from './components/NinjasAtTopCompanies';
import SuccessStories from './components/SuccessStories';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';



const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <HighlightsSection/>
      <AlumniSection/>
      <NinjasAtTopCompanies/>
      <SuccessStories/>
      <Footer1/>
      <Footer2/>
      
      
    </div>
  )
}

export default App

