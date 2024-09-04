import { useMemo } from 'react';
import { ethers } from 'ethers';

// The RPC URL (e.g., Infura, Alchemy, or any other Ethereum provider)
const RPC_URL = 'https://sepolia.infura.io/v3/34df99fbbd624cdb80e4e8b6cc29f4d6'; 

export const useContract = (address, abi) => {
  const contract = useMemo(() => {
    if (!address || !abi) return null;

    // Use the custom RPC provider instead of the default Web3Provider
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
    const signer = provider.getSigner();

    return new ethers.Contract(address, abi, signer);
  }, [address, abi]);

  return contract;
};
