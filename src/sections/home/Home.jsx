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
    <>
      <Header />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <HighlightsSection />
        <AlumniSection />
        <NinjasAtTopCompanies />
        <SuccessStories />
        <LearningModel />
        <Stuck />
        <Footer1 />
        <Footer2 />
      </main>
    </>
  );
};

export default Home;
