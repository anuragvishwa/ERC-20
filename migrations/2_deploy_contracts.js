const DappToken = artifacts.require("DaapToken");

module.exports = function (deployer) {
  deployer.deploy(DappToken, 1000000);
};
