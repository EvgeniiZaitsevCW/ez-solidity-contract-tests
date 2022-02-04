// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

contract Contract2 {
    mapping (address => mapping (address => uint256)) private _allowances;

    event Approval(address indexed owner, address indexed spender, uint256 amount);

    function approve(address spender, uint256 amount) public virtual returns (bool) {
        require(msg.sender != address(0), "Contract2: approve from the zero address");
        require(spender != address(0), "Contract2: approve to the zero address");

        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);

        return true;
    }

    function allowance(address owner, address spender) public view virtual returns (uint256) {
        return _allowances[owner][spender];
    }

}