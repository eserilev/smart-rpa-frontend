import React, { useEffect, useState } from "react";
import moment from "moment";
import { Form, Button } from "react-bootstrap";

// import styled from "styled-components";

const formSchema = {
  URL: "",
  expiration: "",
};

const SignInForm = (props) => {
  const [credentials, setCredentials] = useState(formSchema);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
  };
  console.log(Date.now());

  return (
    <div className="formContainer">
      <h1>User Sign In Form</h1>
      <Form className="form" onSubmit={login}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter URL"
            name="URL"
            onChange={handleChange}
            value={credentials.URL}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Expiry Date</Form.Label>
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
