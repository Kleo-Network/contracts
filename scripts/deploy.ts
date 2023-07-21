import { ethers } from "hardhat";

async function main() {

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy("KLEO", "KLEO");
  await token.deployed();


  const Brownie = await ethers.getContractFactory("BrowniePoints");
  const brownie = await Brownie.deploy();
  await brownie.deployed();

  console.log(`Token deployed to ${token.address}`);
  console.log(`Brownie deployed to ${brownie.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


