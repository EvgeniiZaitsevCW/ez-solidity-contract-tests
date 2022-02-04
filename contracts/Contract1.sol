// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

contract Contract1 {
    uint256 public valueA;
    uint256 public valueB;

    event Configure(uint256 a, uint256 b);

    function configure(uint256 a, uint256 b) external {
        require(a <= b, "Contract1: a <= b");
        valueA = a;
        valueB = b;
        emit Configure(a, b);
    }

}