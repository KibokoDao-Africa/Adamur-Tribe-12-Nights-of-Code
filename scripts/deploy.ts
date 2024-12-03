import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("Hello, Solidity!");

  await helloWorld.deployed();
  console.log(`HelloWorld deployed to: ${helloWorld.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
