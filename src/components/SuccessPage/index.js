import React from "react";
import { Button } from "../HeroSection/Button";
import "./successPage.css";
import MakeConfetti from "../../Confetti/index";
const SuccessPage = () => {
  return (
    <div className="successContainer">
      <h1 className="successh1">
        You Did It! Congratulations On Submitting An Offer!
      </h1>
      <Button
        className="toContractsFoundButton"
        style={{ textDecoration: "none", color: "white" }}
        to="/CurrentContracts"
      >
        View Current Offers
      </Button>
      <MakeConfetti />
    </div>
  );
};

export default SuccessPage;
