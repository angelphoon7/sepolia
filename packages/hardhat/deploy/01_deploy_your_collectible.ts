import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourCollectible" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourCollectible: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("YourCollectible", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract instance
  const yourCollectible: Contract = await hre.ethers.getContract("YourCollectible", deployer);

  // ✅ Use the variable to avoid linter error
  console.log("YourCollectible deployed at address:", yourCollectible.address);
};

export default deployYourCollectible;

// Optional tag to target specific deployments
deployYourCollectible.tags = ["YourCollectible"];
