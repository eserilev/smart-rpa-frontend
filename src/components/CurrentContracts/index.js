import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { LoginContext } from "../../Contexts/LoginContext";
import { Button } from "../HeroSection/Button";
import { GrStatusUnknown } from "react-icons/gr";
import smartRPAFactory from "../../contracts/smartRPAFactory";
import Web3 from "web3";
import "./currentContract.css";
import { RingLoader } from "react-spinners";
import SingleContract from "./SingleContract";
import { Container, Row, Col } from "react-bootstrap";
const CurrentContracts = (props) => {
  const [showLoader, setShowLoader] = useState(true);
  const { currentContracts, setCurrentContracts } = useContext(LoginContext);
  console.log(Object.keys(props.currentContracts).length);
  let totalId = 0;
  console.log(props.currentContracts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    };
    fetchData();
    setShowLoader(false);
  }, []);
  console.log(props.currentContracts);
  return (
    <div className="tableContainer ">
      {props.currentContracts.length === 0 && (
        <div className="noContractsFound">
          <h1 className="noContractsFoundText">
            <GrStatusUnknown /> No Contracts Found... <GrStatusUnknown />
            <RingLoader />
          </h1>
          <Button
            className="noContractsFoundButton"
            style={{ textDecoration: "none", color: "white" }}
            to="/ContractForm"
          >
            Create New Contract
          </Button>
        </div>
      )}
      <Container>
        {currentContracts.length !== 0 && (
          <h1 className="contractsFoundHeader">
            {" "}
            Your Current Smart RPA Contracts!
          </h1>
        )}
        <Row className="align-items-center justify-content-evenly">
          {currentContracts.length !== 0 &&
            currentContracts.map((contract) => {
              return (
                <Col xs md={6} xl={4} className="mx-auto g-5">
                  <SingleContract contract={contract} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default CurrentContracts;
