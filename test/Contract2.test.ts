import { ethers } from "hardhat";
import { expect } from "chai";
import { ContractFactory, Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe("Contract2", async () => {
  let contract2: Contract;
  let deployer: SignerWithAddress;
  let other1: SignerWithAddress;
  let other2: SignerWithAddress;

  beforeEach(async () => {
    // Deploy Contract2
    const Contract2: ContractFactory = await ethers.getContractFactory("Contract2");
    contract2 = await Contract2.deploy();
    await contract2.deployed();

    // Get user accounts
    [deployer, other1, other2] = await ethers.getSigners();
  });

  it("Approve executes successfully", async () => {
    const tokenAmount: number = 100;
    const tx_result = await contract2.connect(other1).approve(other2.address, tokenAmount);
    await tx_result.wait();
    expect(await contract2.allowance(other1.address, other2.address))
      .to.equal(tokenAmount);
  });
});
