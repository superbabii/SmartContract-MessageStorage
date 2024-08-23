const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
  it("should store and retrieve a message", async () => {
    const instance = await SimpleStorage.deployed();

    // Set the message
    await instance.setMessage("Hello, Blockchain!");

    // Get the message
    const storedMessage = await instance.getMessage();

    assert.equal(storedMessage, "Hello, Blockchain!", "The message was not stored correctly.");
  });
});
