import React, { useEffect, useState, useContext } from "react";
import moment from "moment";

import { Form, Button, Alert } from "react-bootstrap";
import smartRPAFactory from "../../contracts/smartRPAFactory";
import Web3 from "web3";
import { LoginContext } from "../../Contexts/LoginContext";
import useWindowSize from "react-use/lib/useWindowSize";
import MakeConfetti from "../../Confetti/index";
import { useParams, useHistory } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { GiPartyPopper } from "react-icons/gi";
import "./ContractFormStyles.css";
// import styled from "styled-components";

var test = smartRPAFactory.abi;
const formSchema = {
  URL: "",
  expiration: "",
};

const SignInForm = (props) => {
  const [credentials, setCredentials] = useState(formSchema);
  let [loading, setLoading] = useState(false);
  const { push } = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const redirectToTarget = () => {
    props.history.push(`/SuccessPage`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitOffer = async (e) => {
    e.preventDefault();
    const url = credentials.URL;
    const expiration = moment(credentials.expiration);
    const daysTilExpiration = expiration.diff(moment(), "days");

    let web3 = new Web3(window["ethereum"]);
    setLoading(true);
    const accounts = await web3.eth.getAccounts();
    const smartRPA = new web3.eth.Contract(
      smartRPAFactory.abi,
      smartRPAFactory.address
    );
    try {
      await smartRPA.methods
        .submitOffer(daysTilExpiration, url)
        .send({ from: accounts[0] });
      setLoading(false);
    } catch(ex) {
      setLoading(false);
    }
   

    redirectToTarget();
  };

  return (
    <div className="formContainer backGroundImage">
      {loading !== true && <h1 className="h1Submit">Submit an offer</h1>}
      {loading && (
        <div className="loaderContainer">
          <h1 className="loaderh1">
            <GiPartyPopper /> Your Contract Is Being Processed!{" "}
            <GiPartyPopper />
          </h1>
          <p className="loaderh1">Please Wait...</p>
          <GridLoader
            loading={loading}
            size={"45px"}
            color={"silver"}
            margin={"2"}
          />
        </div>
      )}

      {loading !== true && (
        <Form className="form" onSubmit={submitOffer}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>RPA Document URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              name="URL"
              onChange={handleChange}
              value={credentials.URL}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              min={moment().format("YYYY-MM-DD")}
              name="expiration"
              onChange={handleChange}
              value={credentials.expiration}
            />
          </Form.Group>

          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default SignInForm;
