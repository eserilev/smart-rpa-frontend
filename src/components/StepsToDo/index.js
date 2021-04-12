import React, { useState, useContext, useEffect } from "react";
import useStickyState from "../CustomHooks/StickyState";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import smartRPAFactory from "../../contracts/smartRPAFactory";
import Web3 from "web3";
const stepFromLocalStorage = JSON.parse(
  localStorage.getItem("activeStep") || 1
);
const StepsToDo = (props) => {
  const [activeStep, setActiveStep] = useState(stepFromLocalStorage);
  const [show, setShow] = useState(true);

  useEffect(() => {
    localStorage.setItem("activeStep", JSON.stringify(activeStep));
  }, [activeStep]);

  useEffect(() => {
    const fetchData = async () => {
      let web3 = new Web3(window["ethereum"]);
      const smartRPA = new web3.eth.Contract(
        smartRPAFactory.abi,
        smartRPAFactory.address
      );
      var count = await smartRPA.methods.getNumberOfOffers().call();
      let currentContracts = [];
      for (let i = 0; i < count; i++) {
        var offer = await smartRPA.methods.offers(i).call();
        let newContract = {
          newUrl: offer.rpaURL,
          newdaysTilExpiration: offer.initialResponseTime,
          activeOffer: offer.activeOffer,
          offerRespondedTo: offer.offerRespondedTo,
          offerResponse: "NO RESPONSE",
        };
        currentContracts.push(newContract);
      }
      props.setCurrentContracts([...currentContracts]);
      console.log(currentContracts);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="stepsh1">Step By Step Application Process</h1>
      <Container fluid>
        {props.currentContracts.length !== 0 && show && (
          <Alert
            variant="success"
            onClose={() => setShow(false)}
            dismissible
            className="alerter"
          >
            <Alert.Heading>
              {props.currentContracts.length} Pending Contracts Found!
            </Alert.Heading>
            <LinkContainer to="/CurrentContracts">
              <Alert.Link>View Contracts Here!</Alert.Link>
            </LinkContainer>

            <p></p>
          </Alert>
        )}
        <Row className="align-items-center">
          <Col xs lg={6} xl={4} className="align-self-center">
            <div
              className={`circle1 ${
                activeStep === 1 ? "ActiveStep" : "InactiveStep"
              }`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 1</h2>
                <p>Explore Zillow Listings!</p>

                <Button
                  className={`${
                    activeStep === 1 ? "buttonActive" : "buttonDisabled"
                  }`}
                  onClick={() => setActiveStep("2")}
                  id="STEP_1"
                  target="_blank"
                  href="https://www.zillow.com/homes/recently_sold/?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22mapBounds%22%3A%7B%22west%22%3A-119.77852821350098%2C%22east%22%3A-119.67862129211426%2C%22south%22%3A39.37597583605191%2C%22north%22%3A39.47343791983462%7D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22fsba%22%3A%7B%22value%22%3Afalse%7D%2C%22fsbo%22%3A%7B%22value%22%3Afalse%7D%2C%22nc%22%3A%7B%22value%22%3Afalse%7D%2C%22fore%22%3A%7B%22value%22%3Afalse%7D%2C%22cmsn%22%3A%7B%22value%22%3Afalse%7D%2C%22auc%22%3A%7B%22value%22%3Afalse%7D%2C%22pmf%22%3A%7B%22value%22%3Afalse%7D%2C%22pf%22%3A%7B%22value%22%3Afalse%7D%2C%22rs%22%3A%7B%22value%22%3Atrue%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%2C%22price%22%3A%7B%22min%22%3A900000%7D%2C%22mp%22%3A%7B%22min%22%3A3005%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A13%7D"
                >
                  View Listing!
                </Button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4} className="align-self-center">
            <div
              className={`circle2 ${
                activeStep === "2" ? "ActiveStep" : "InactiveStep"
              }`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 2</h2>
                <p>Submit An Offer!</p>

                <Button
                  className={`${
                    activeStep === "2" ? "buttonActive" : "buttonDisabled"
                  }`}
                  renderAs="button"
                  id="STEP_2"
                  target="_blank"
                  href="/ContractForm"
                  onClick={() => setActiveStep("3")}
                >
                  Submit Offer!
                </Button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4} className="align-self-center">
            <div
              className={`circle3 ${
                activeStep === "3" ? "ActiveStep" : "InactiveStep"
              }`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 3</h2>
                <p>View Pending Offers!</p>

                <Button
                  className={`${
                    activeStep === "3" ? "buttonActive" : "buttonDisabled"
                  }`}
                  renderAs="button"
                  id="STEP_1"
                  target="_blank"
                  href="/CurrentContracts"
                  onClick={() => setActiveStep(1)}
                >
                  View My Offers!
                </Button>
              </div>
            </div>
          </Col>
          {/* <Col xs md={6} xl={4} className="align-self-center">
            <div
              className={`circle ${
                activeStep === "2" ? "ActiveStep" : "InactiveStep"
              }`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 1</h2>
                <p>Explore Zillow Listings!</p>

                <Button
                  className={`${
                    activeStep === "2" ? "buttonActive" : "buttonDisabled"
                  }`}
                  renderAs="button"
                  id="STEP_1"
                  target="_blank"
                  href="http://localhost:3000/ContractForm"
                  onClick={() => setActiveStep("3")}
                >
                  View Listing!
                </Button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4} className="align-self-center">
            <div
              className={`circle ${
                activeStep === "2" ? "ActiveStep" : "InactiveStep"
              }`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 1</h2>
                <p>Explore Zillow Listings!</p>

                <Button
                  className={`${
                    activeStep === "2" ? "buttonActive" : "buttonDisabled"
                  }`}
                  renderAs="button"
                  id="STEP_1"
                  target="_blank"
                  href="http://localhost:3000/ContractForm"
                  onClick={() => setActiveStep("3")}
                >
                  View Listing!
                </Button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4} className="align-self-center">
            <div
              className={`circle ${
                activeStep === "2" ? "ActiveStep" : "InactiveStep"
              }`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 1</h2>
                <p>Explore Zillow Listings!</p>

                <Button
                  className={`${
                    activeStep === "2" ? "buttonActive" : "buttonDisabled"
                  }`}
                  renderAs="button"
                  id="STEP_1"
                  target="_blank"
                  href="http://localhost:3000/ContractForm"
                  onClick={() => setActiveStep("3")}
                >
                  View Listing!
                </Button>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default StepsToDo;
