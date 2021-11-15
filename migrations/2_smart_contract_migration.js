const SmartContract = artifacts.require("LITTLENFTS");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "JONLITTLENFTS", "LITTLENFTS", "https://jonlittlenfts.com ");
};
