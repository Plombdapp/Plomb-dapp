import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

export const getContract = (contractAddress, abi) => {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
};

export default provider;
