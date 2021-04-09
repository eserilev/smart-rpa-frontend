import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const StepsToDo = () => {
  const [active1, setActive1] = useState("ActiveStep");
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  return (
    <>
      <h1 className="stepsh1">Step By Step Application Process</h1>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs md={6} xl={4} className="align-self-center">
            <div
              className={`circle ${active1 ? "ActiveStep" : "InactiveStep"}`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 1</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <LinkContainer to="/ContractForm">
                  <Button
                    className={`${active1 ? "buttonActive" : "buttonDisabled"}`}
                  >
                    Submit Contract
                  </Button>
                </LinkContainer>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div
              className={`circle ${active2 ? "ActiveStep" : "InactiveStep"}`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 2</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button
                  className={`${active2 ? "buttonActive" : "buttonDisabled"}`}
                >
                  Do The Thing
                </button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div
              className={`circle ${active3 ? "ActiveStep" : "InactiveStep"}`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 3</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button
                  className={`${active2 ? "buttonActive" : "buttonDisabled"}`}
                >
                  Do The Thing
                </button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div
              className={`circle ${active3 ? "ActiveStep" : "InactiveStep"}`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 4</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button
                  className={`${active3 ? "buttonActive" : "buttonDisabled"}`}
                >
                  Do The Thing
                </button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div
              className={`circle ${active4 ? "ActiveStep" : "InactiveStep"}`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 5</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>

                <button
                  className={`${active4 ? "buttonActive" : "buttonDisabled"}`}
                >
                  Do The Thing
                </button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div
              className={`circle ${active5 ? "ActiveStep" : "InactiveStep"}`}
            >
              <div className="circleContent">
                <h2 className="circleH2">Step 6</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button
                  className={`${active5 ? "buttonActive" : "buttonDisabled"}`}
                >
                  Do The Thing
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StepsToDo;
