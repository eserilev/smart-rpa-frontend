import React from "react";
import { Button } from "../HeroSection/Button";
import "./successPage.css";
import MakeConfetti from "../../Confetti/index";
const SuccessPage = () => {
  return (
    <div className="successContainer">
      <h1 className="successh1">
        You Did It! Congratulations On Submitting Your First Offer We Will Get
        In Touch With You Shortly!
      </h1>
      <Button
        className="toContractsFoundButton"
        style={{ textDecoration: "none", color: "white" }}
        to="/CurrentContracts"
      >
        View Current Contracts
      </Button>
      <MakeConfetti />
    </div>
  );
};

export default SuccessPage;
