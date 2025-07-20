import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import AlumniSection from "./AlumniSection";
import NinjasAtTopCompanies from "./NinjasAtTopCompanies";
import SuccessStories from "./SuccessStories";
import LearningModel from "./LearningModel";
import Stuck from "./Stuck";
import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
       {/* <div className="h-[1500px] bg-gray-100"></div>  */}
      <HighlightsSection />
      <AlumniSection />
      <NinjasAtTopCompanies />
      <SuccessStories />
      <LearningModel />
      <Stuck />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
