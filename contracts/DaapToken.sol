// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DaapToken {
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initalSupply) public {
        balanceOf[msg.sender] = _initalSupply;
        totalSupply = _initalSupply;
    }
}
