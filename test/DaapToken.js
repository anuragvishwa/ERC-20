var DaapToken = artifacts.require("DaapToken");

contract("DaapToken", (accounts) => {
  let tokenInstance;
  let totalSupply;
  let adminBalance;

  beforeEach(async () => {
    tokenInstance = await DaapToken.deployed();
    totalSupply = await tokenInstance.totalSupply();
    adminBalance = await tokenInstance.balanceOf(accounts[0]);
  });

  describe("DaapToken Contract", () => {
    it("sets the total supply upon deployment", async () => {
      await assert.strictEqual(totalSupply.toNumber(), 1000000);
    });

    it("it allocated the initial supply to admin(account(0)) 1million tokens(100000) ", async () => {
      await assert.strictEqual(adminBalance.toNumber(), 1000000);
    });
  });
});
