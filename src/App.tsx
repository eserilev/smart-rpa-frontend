import { Component } from 'react';
import './App.css';
import  Web3 from 'web3';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import smartRPA from './contracts/smartRPA';

interface IProps {

}

interface IState {
  account?: string;
}

class App extends Component<IProps, IState> {
  
  componentDidMount() {
    this.loadWeb3();
    this.loadBlockchainData();
    this.checkContract();
  }

  async loadWeb3() {
    if(window['ethereum'] ) {
      window['web3'] = new Web3(window['ethereum'])
      await window['ethereum'].enable();
    }
    else {
      window['web3'] = new Web3(window['web3'].currentProvider)
    }
  }

  async checkContract() {
    let activeOffer = await smartRPA.methods.activeOffer().call();
    console.log(activeOffer);
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] })
  }


  constructor(props) {
    super(props);
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="App">
       
      <Home></Home>
      </div>
    );
  }
}

export default App;