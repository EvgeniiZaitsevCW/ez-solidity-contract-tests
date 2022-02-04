import { ethers } from "hardhat";
import { expect } from "chai";
import { ContractFactory, Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe("Contract1", async () => {
  let contract1: Contract;
  let deployer: SignerWithAddress;

  beforeEach(async () => {
    // Deploy contract1
    const Contract1: ContractFactory = await ethers.getContractFactory("Contract1");
    contract1 = await Contract1.deploy();
    await contract1.deployed();

    // Get user accounts
    [deployer] = await ethers.getSigners();
  });

  it("Configure balances", async () => {
    // Configuration values
    let valueA: number = 100;
    let valueB: number = 200;

    // Make sure no configurations have been made
    expect(await contract1.valueA()).to.equal(0);
    expect(await contract1.valueB()).to.equal(0);

    //Configure balances
    const tx_result = await contract1.configure(valueA, valueB);
    await tx_result.wait();
    expect(await contract1.valueA()).to.equal(valueA);
    expect(await contract1.valueB()).to.equal(valueB);
  });
});
