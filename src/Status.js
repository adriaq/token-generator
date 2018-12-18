import React, { Component } from 'react';

class Status extends Component {
  constructor(props) {
    super(props);
    this.address = null;

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
