import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk'
      }
    },
    substrate: {
      url: "http://127.0.0.1:9933",
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
    }
  },
  etherscan: {
    // API key for Etherscan
    apiKey: ""
  },
  mocha: {
    timeout: 60000
  }
};
