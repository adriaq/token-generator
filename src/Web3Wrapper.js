import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import App from './App';

class Web3Wrapper extends Component {
  constructor(props) {
    super(props);

    window.web3 = new Web3(window.ethereum);
    var web3 = window.web3;
    try {
            // Request account access if needed
             window.ethereum.enable();
            // Acccounts now exposed
        } catch (error) {
            console.log(error);
          }
    if(typeof web3 !== 'undefined'){
      console.log("Using web3 detected from external source like Metamask")
      this.web3 = new Web3(web3.currentProvider)
    }else{
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    }
}

  render() {

    return <App web3={this.web3}/>


  }
}

export default Web3Wrapper;
