const hre = require("hardhat");

async function main() {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    // Waiting for the deployment transaction to complete
    await counter.deploymentTransaction().wait();

    // We get the contract address from 'receipt'
    const receipt = await hre.ethers.provider.getTransactionReceipt(counter.deploymentTransaction().hash);

    console.log("Counter deployed to:", receipt.contractAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
