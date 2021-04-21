// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DaapToken {
    uint256 public totalSupply;

    //constructor
    //set total number of tokens
    //read total number of tokens
    constructor() public {
        totalSupply = 1000000;
    }
}
