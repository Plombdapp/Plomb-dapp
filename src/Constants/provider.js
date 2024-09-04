import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider("https://sepolia-rollup.arbitrum.io/rpc");

export const getContract = (contractAddress, abi) => {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
};

export default provider;
