import React, { Component } from 'react';

class Status extends Component {
  constructor(props) {
    super(props);
    this.address = null;
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
    if (this.props.status === 'deployed') {
      return (
        <div class="alert alert-success" role="alert">
          <span> Contract deployed at</span>
          <span>{this.props.address}</span>
        </div>
      )
    } else if(this.props.status === 'deploying') {
      return (
        <div class="alert alert-info" role="alert">
          Your contract is being deployed. Please wait
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default Status;
