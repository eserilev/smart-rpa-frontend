import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const StepsToDo = () => {
  return (
    <>
      <h1 className="stepsh1">Step By Step Application Process</h1>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs md={6} xl={4} className="align-self-center">
            <div className="circle">
              <div className="circleContent">
                <h2 className="circleH2">Step 1</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button>Do The Thing</button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div className="circle">
              <div className="circleContent">
                <h2 className="circleH2">Step 2</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button>Do The Thing</button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div className="circle">
              <div className="circleContent">
                <h2 className="circleH2">Step 3</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button>Do The Thing</button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div className="circle">
              <div className="circleContent">
                <h2 className="circleH2">Step 4</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button>Do The Thing</button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div className="circle">
              <div className="circleContent">
                <h2 className="circleH2">Step 5</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>

                <button>Do The Thing</button>
              </div>
            </div>
          </Col>
          <Col xs md={6} xl={4}>
            <div className="circle">
              <div className="circleContent">
                <h2 className="circleH2">Step 6</h2>
                <p>Connect Your Thing To The BlockChain Thing</p>
                <button>Do The Thing</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StepsToDo;
