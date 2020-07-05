const todo = artifacts.require("todo");

module.exports = function(deployer) {
  deployer.deploy(todo);
};
