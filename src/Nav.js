import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.web3 = this.props.web3;
    this.state = {
      accounts: null,
    };
  }
  async componentDidMount() {
    var that = this
    this.web3.eth.getAccounts(function(error, accounts) {
      if(error) {
        that.setState({
              web3error: true
        });
      } else {
        that.setState({
              accounts: accounts
        });
      }
    });
    this.web3.eth.net.getId(function(error, netID) {
      if(error) {
        console.log(error);
      } else {
        that.setState({
              network: netID
        });
      }
    });
  }

  render() {
    return (
      <div id="navbar">
        <div id="version-container">
          <span class="key">Web3 Version</span>
          <span class="value">{this.props.web3.version}</span>
        </div>
        <div id="settings-container">
          <div class="outer">
            <div id="account-container">
              <span class="key">Account</span>
              <span class="value">{this.state.accounts}</span>
            </div>
          </div>
          <div class="outer">
            <div id="network-container">
              <span class="key">Network</span>
              <span class="value">{this.state.network}</span>
            </div>
          </div>
        </div>
      </div>
)

  }
}

export default Nav;
