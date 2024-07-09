require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// console.log(process.env);

module.exports = {
  solidity: "0.8.24",
  network : {
    goerli : {
      url : process.env.ALCHEMY_RPC_URL,
      accaunts : [`0x${process.env.TESTNET_PRIVATE_KEY}`]
    }
  }
};
