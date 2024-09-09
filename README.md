# MyToken

This Solidity program is a simple token contract that demonstrates the basic syntax and functionality of the Solidity programming language. The purpose of this program is to serve as a starting point for those who are new to Solidity and want to get a feel for how it works.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The contract has public variables to store the details about the token, a mapping to store balances, and functions to mint and burn tokens. This program serves as a simple and straightforward introduction to Solidity programming and can be used as a stepping stone for more complex projects in the future.

## Getting Started

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., HelloWorld.sol). Copy and paste the following code into the file:

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract MyToken {
    // public variables here
    string public tokenName = "META";
    string public tokenAbbrv = "MTA";
    uint256 public totalSupply = 0;

    // mapping variable here
    mapping(address => uint256) public balances;

    // mint function
    function mint(address _address, uint256 _value) public {
        totalSupply = totalSupply + _value;
        balances[_address] = balances[_address] + _value;
    }

    // burn function
    function burn(address _address, uint256 _value) public {
        if(balances[_address] >= _value){
            totalSupply = totalSupply - _value;
            balances[_address] = balances[_address] - _value;
        }
    }
}

```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.7" (or another compatible version), and then click on the "Compile MyToken.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "MyToken" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the mint and burn functions. Click on the "MyToken" contract in the left-hand sidebar, and then interact with the functions as needed.

## Authors

Kapil Gamgwar  
[@kplgngwr](https://www.linkedin.com/in/kplgngwr/)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details