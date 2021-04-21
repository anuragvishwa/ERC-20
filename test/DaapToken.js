var DaapToken = artifacts.require("DaapToken");

let tokenInstance;
let totalSupply;

beforeEach(async () => {
  tokenInstance = await DaapToken.deployed();
  totalSupply = await tokenInstance.totalSupply();
});

it("sets the total supply upon deployment", async () => {
  await assert.strictEqual(totalSupply.toNumber(), 1000000);
});
