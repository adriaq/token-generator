import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './Nav';

const HumanStandardToken = require('./contracts/HumanStandardToken.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.web3 = this.props.web3;
    this.state = {
      deployed : 'notdeployed',
      accounts: null,
      web3error: false,
      tokenName: '',
      tokenSymbol: '',
      tokenTotalSupply: 1,
      tokenDecimalPlaces: 0,
      tokenAddress: 0
    };
  }
  async componentDidMount() {
    this.web3.eth.getAccounts((error, accounts) => {
      if (error) {
        this.setState({ web3error: true });
      } else {
        this.setState({ accounts: accounts });
      }
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    // get our form data out of state
    const {tokenName, tokenSymbol, tokenTotalSupply, tokenDecimalPlaces} = this.state;

    let tokenContract = new this.web3.eth.Contract(HumanStandardToken.abi);
    const instance = await tokenContract
      .deploy({
        data: HumanStandardToken.bytecode,
        arguments: [tokenName, tokenSymbol, tokenTotalSupply, tokenDecimalPlaces]})
      .send({ from: this.state.accounts[0] });
    // Aqui shauria de gestionar si el contracte no s'instancia be
    this.setState({deployed: 'deployed'});
    this.setState({tokenAddress: instance.options.address});
    console.log(`Address: ${instance.options.address}`);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const {tokenName, tokenSymbol, tokenTotalSupply, tokenDecimalPlaces} = this.state;

    if(this.state.deployed == 'notdeployed'){
      return (
        <div>
          <Nav web3={this.web3}/>
          <h1>ERC20 Token generator</h1>
          <form onSubmit={this.onSubmit}>
            Name of the token:
             <input
               required
               type="text"
               name="tokenName"
               value={tokenName}
               onChange={this.onChange}
             />
             Symbol (ex. BTC, LTC, ETH...):
              <input
                required
                type="text"
                name="tokenSymbol"
                value={tokenSymbol}
                onChange={this.onChange}
              />
              Total supply:
               <input
                 required
                 type="number"
                 min="1"
                 step="1"
                 name="tokenTotalSupply"
                 value={tokenTotalSupply}
                 onChange={this.onChange}
               />
               Decimal Places
                <input
                  required
                  type="number"
                  min="0"
                  step="1"
                  name="tokenDecimalPlaces"
                  value={tokenDecimalPlaces}
                  onChange={this.onChange}
                />
             <button type="submit">Submit</button>
           </form>
        </div>
      );
    } else if (this.state.deployed == 'deployed') {
      return(
        <div>
        <Nav web3={this.web3}/>
        <h1>ERC20 Token generator</h1>
        {this.state.tokenAddress}</div>
      );
    }
  }
}

export default App;
