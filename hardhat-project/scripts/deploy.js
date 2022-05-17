const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log("Whitelsit Contract Address:", deployedWhitelistContract.address);
}

console.log("called here");

main()
  .then(() => {
    console.log("called too");
    process.exit(0);
  })
  .catch((err) => {
    console.log("error: ", err);
    process.exit(1);
  });
