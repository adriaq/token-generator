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


  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <ul class="navbar-nav">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="float-md-left">
                  <span><strong>Account: </strong></span>
                  <span> {this.props.accounts}</span>
              </div>
            </div>
          </div>
        </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <span><strong>Network</strong></span>
                <span class="badge badge-info">{this.props.network}</span>
              </li>
              <li class="nav-item">
                <span><strong>Connection Status</strong></span>
                <ConnectionStatus accounts={this.props.accounts}/>
              </li>
            </ul>

      </nav>
)

  }
}

export default Nav;

function ConnectionStatus(props) {
    if(props.accounts != null) {
      return <span class="badge badge-success">Connected</span>
    } else return  <span class="badge badge-danger">Not connected</span>
}
