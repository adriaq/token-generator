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
        let network
        if (netID === 1) network = 'Main'
        else if (netID === 4) network = 'Rinkeby'
        else if (netID === 3) network = 'Ropsten'
        else if (netID === 42) network = 'Kovan'
        else network = 'Custom'
        that.setState({
              network: network
        });
      }
    });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="row">
            <div class="col">
                <span>Account </span>
                <span>{this.state.accounts}</span>
            </div>
            <div class="col">
                <ul class="pagination">
                  <li class="page-item disabled"><a class="page-link">Network</a></li>
                  <li class="page-item"><a class="page-link">{this.state.network}</a></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
)

  }
}

export default Nav;
