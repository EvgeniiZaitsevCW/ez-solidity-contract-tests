# Solidity Contract Tests
Tests for some Solidity contracts

Just a sandbox to play with contracts using [Hardhat tools](https://hardhat.org/)

## Usage
1. To set up the project run: `npm install`.
2. After setting up to run tests use:
* on internal Hardhat network: `npx hardhat test`
* on Substrate network: `npx hardhat test --network substrate`
* the same for a single test file: `npx hardhat --network substrate test test/Contract1.test.ts`

You can set other networks to run in the [hardhat.config.ts](hardhat.config.ts)
