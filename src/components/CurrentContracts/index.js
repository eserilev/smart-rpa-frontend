import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { LoginContext } from "../../Contexts/LoginContext";
import { Button } from "../HeroSection/Button";
import { GrStatusUnknown } from "react-icons/gr";
import "./currentContract.css";
const CurrentContracts = (props) => {
  const { currentContracts, setCurrentContracts } = useContext(LoginContext);
  console.log(Object.keys(props.currentContracts).length);
  let totalId = 0;
  console.log(props.currentContracts);
  return (
    <div className="tableContainer">
      {props.currentContracts.length === 0 && (
        <div className="noContractsFound">
          <h1 className="noContractsFoundText">
            <GrStatusUnknown /> No Contracts Found... <GrStatusUnknown />
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
      {props.currentContracts.length !== 0 && (
        <>
          <h1 className="ContractsFound">Your Current Contracts!</h1>
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="contractTable"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Contract URL</th>
                <th>Expiration Date</th>
                <th>Days Until Expiration</th>
              </tr>
            </thead>
            <tbody>
              {props.currentContracts.map((contract) => {
                totalId++;
                return (
                  <tr>
                    <td>{totalId}</td>
                    <td>{contract.newUrl}</td>
                    <td>{contract.newexpiration}</td>
                    <td>{contract.newdaysTilExpiration}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default CurrentContracts;
