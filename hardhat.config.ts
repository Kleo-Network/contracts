import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");

require("solidity-coverage");
require("hardhat-docgen");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();


const TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVATE_KEY;
const POLYGON_SCAN_API_KEY = process.env.POLYGON_SCAN_API_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${TESTNET_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: `${POLYGON_SCAN_API_KEY}`,
    },
  }
};

export default config;
