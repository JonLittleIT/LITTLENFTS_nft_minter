const SmartContract = artifacts.require("LITTLENFTS");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "LITTLENFTS", "LITT", "https://jonlittlenfts.com ");
};
