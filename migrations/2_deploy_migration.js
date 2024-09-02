var v0 = artifacts.require("HelloWorld");
module.exports = function (deployer) {
  deployer.deploy(v0);
}

const v1 = artifacts.require("payableContract");
module.exports = function(deployer) {
  deployer.deploy(v1);
};

const v2 = artifacts.require("challenge_3");
module.exports = function(deployer) {
  deployer.deploy(v2,10);
};

const v3 = artifacts.require("Event");
module.exports = function(deployer) {
  deployer.deploy(v3);
};

const v4 = artifacts.require("Indexed_Event");
module.exports = function(deployer) {
  deployer.deploy(v4);
};

const v5 = artifacts.require("MyToken");
module.exports = function(deployer) {
  deployer.deploy(v5);
};