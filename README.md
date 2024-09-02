# MyToken Project

A simple ERC-20-like token implementation in Solidity.

## Description

The MyToken project is a basic implementation of a token on the Ethereum blockchain. It includes functionalities to mint and burn tokens, and keeps track of balances for each address. This project serves as an educational example for understanding how tokens work on the Ethereum network.

## Getting Started

### Installing

1. **Clone the repository:**
   ```
   git clone https://github.com/kplgngwr/MyToken-project.git
   ```
   
2. **Install Truffle:**
    ```
    npm install -g truffle
    ``` 
3. **Install dependencies:**
    ```
    npm install
    ```
    
### Executing program
    
1. **Compile the smart contract:**
    ```
    truffle compile
    ```
    
2. **Deploy the smart contract to a local blockchain:**
    ```
    truffle develop
    truffle(develop)> migrate
    ```
    
3. **Interact with the contract:**
    ```
    truffle(develop)> let instance = await MyToken.deployed()
    truffle(develop)> instance.mint("0xYourAddressHere", 1000)
    truffle(develop)> instance.burn("0xYourAddressHere", 500)
    ```
    
## Help
For common issues, ensure you have the correct version of Node.js and npm installed. If you encounter issues with Truffle, refer to the [Truffle documentation](https://www.trufflesuite.com/docs).


## Authors
Contributors names and contact info:
- Kapil Gangwar
  [@kplgngwr](https://www.linkedin.com/in/kplgngwr/)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
    