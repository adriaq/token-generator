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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="float-md-left">
                  <span><strong>Account: </strong></span>
                  <span> {this.props.accounts}</span>
              </div>
            </div>
          </div>
        </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span><strong>Network</strong></span>
                <span className="badge badge-info">{this.props.network}</span>
              </li>
              <li className="nav-item">
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
      return <span className="badge badge-success">Connected</span>
    } else return  <span className="badge badge-danger">Not connected</span>
}
