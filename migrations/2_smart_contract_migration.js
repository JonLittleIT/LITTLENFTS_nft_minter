const SmartContract = artifacts.require("LITTLENFTS");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "LITTLENFTS", "LITTLENFTS", "https://jonlittlenfts.com ");
};
