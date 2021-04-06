import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer/index";
import StepsToDo from "../components/StepsToDo";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <StepsToDo />
      <Footer />
    </>
  );
};

export default Home;
