import { Component } from 'react';
import './App.css';
import  Web3 from 'web3';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SmartRPAFactory from './contracts/smartRPAFactory';

interface IProps {

}
interface IState {
  account?: string;
  web3: Web3;
}

class App extends Component<IProps, IState> {
  
  componentDidMount() {
    this.loadWeb3();
    this.loadBlockchainData();

   
  }

  async loadWeb3() {
    if(window['ethereum'] ) {
      window['web3'] = new Web3(window['ethereum'])
      await window['ethereum'].enable();
      this.setState({ web3: new Web3(window['ethereum'])});
    }
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] })
  }


  constructor(props) {
    super(props);
    this.state = { account: '', web3: null }
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