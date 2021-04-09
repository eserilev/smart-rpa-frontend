import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer/index";
import StepsToDo from "../components/StepsToDo";
import SignInForm from "../components/ContractForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <HeroSection />
          <StepsToDo />
        </Route>
        <Route exact path="/ContractForm" component={SignInForm}></Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default Home;
