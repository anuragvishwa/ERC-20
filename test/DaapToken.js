var DaapToken = artifacts.require("DaapToken");

contract("DaapToken", (accounts) => {
  let tokenInstance, totalSupply, adminBalance, name, symbol, standard;

  beforeEach(async () => {
    tokenInstance = await DaapToken.deployed();
    totalSupply = await tokenInstance.totalSupply();
    adminBalance = await tokenInstance.balanceOf(accounts[0]);
    name = await tokenInstance.name();
    symbol = await tokenInstance.symbol();
    standard = await tokenInstance.standard();
  });

  describe("DaapToken Contract", () => {
    it("sets the total supply upon deployment", async () => {
      await assert.strictEqual(totalSupply.toNumber(), 1000000);
    });

    it("it allocated the initial supply to admin(account(0)) 1million tokens(100000) ", async () => {
      await assert.strictEqual(adminBalance.toNumber(), 1000000);
    });

    it("initializes the contract with name", async () => {
      await assert.strictEqual(name, "Triology");
    });

    it("initializes the contract with symbol", async () => {
      await assert.strictEqual(symbol, "TL");
    });

    it("initializes the contract with standard", async () => {
      await assert.strictEqual(standard, "TL v1.0");
    });
  });
});
