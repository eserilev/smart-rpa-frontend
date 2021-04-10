import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer/index";
import StepsToDo from "../components/StepsToDo";
import SignInForm from "../components/ContractForm";
import CurrentContracts from "../components/CurrentContracts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";
import SuccessPage from "../components/SuccessPage";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContracts, setCurrentContracts] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Provider

  return (
    <div className="Home">
      <LoginContext.Provider value={{ currentContracts, setCurrentContracts }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <HeroSection />
            <StepsToDo
              currentContracts={currentContracts}
              setCurrentContracts={setCurrentContracts}
            />
          </Route>
          <Route
            exact
            path="/ContractForm"
            render={(props) => (
              <SignInForm
                {...props}
                currentContracts={currentContracts}
                setCurrentContracts={setCurrentContracts}
              />
            )}
          />
          <Route exact path="/CurrentContracts">
            <CurrentContracts
              currentContracts={currentContracts}
              setCurrentContracts={setCurrentContracts}
            />
          </Route>
          <Route exact path="/SuccessPage">
            <SuccessPage />
          </Route>
        </Switch>

        <Footer />
      </LoginContext.Provider>
    </div>
  );
};

export default Home;
