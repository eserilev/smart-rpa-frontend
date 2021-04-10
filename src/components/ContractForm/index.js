import React, { useEffect, useState, useContext } from "react";
import moment from "moment";

import { Form, Button, Alert } from "react-bootstrap";
import smartRPAFactory from "../../contracts/smartRPAFactory";
import Web3 from "web3";
import { LoginContext } from "../../Contexts/LoginContext";
import useWindowSize from "react-use/lib/useWindowSize";
import MakeConfetti from "../../Confetti/index";
import { useParams, useHistory } from "react-router-dom";

// import styled from "styled-components";

var test = smartRPAFactory.abi;
const formSchema = {
  URL: "",
  expiration: "",
};

const SignInForm = (props) => {
  const [credentials, setCredentials] = useState(formSchema);
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

  const submitOffer = async (e) => {
    e.preventDefault();
    const url = credentials.URL;
    const expiration = moment(credentials.expiration);

    const daysTilExpiration = expiration.diff(moment(), 'days');

    let web3 = new Web3(window['ethereum']);

    const accounts = await web3.eth.getAccounts();
    const smartRPA = new web3.eth.Contract(smartRPAFactory.abi, smartRPAFactory.address);
    await smartRPA.methods.submitOffer(daysTilExpiration, url).send({from: accounts[0]});

  };

  return (
    <div className="formContainer">
      <h1>Submit an offer</h1>
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
          <Form.Label>Initial Expiry Date</Form.Label>
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
    </div>
  );
};

export default SignInForm;
