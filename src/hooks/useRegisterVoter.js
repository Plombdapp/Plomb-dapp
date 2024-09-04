import { useCallback } from 'react';
import { useContract } from './useContract';
import {CONTRACT_ABI }from '../abi/Voting.json';

export const useRegisterVoter = () => {
  const CONTRACT_ADDRESS = '0x251E537Feaf1730Ac54d0F5aF120541Ec4C04210';
  const contract = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);

  const registerVoter = useCallback(
    async (country) => {
      if (!contract) return;

      try {
        const tx = await contract.registerVoter(country);
        await tx.wait(); // Wait for the transaction to be mined
        console.log('Voter registered successfully');
      } catch (error) {
        console.error('Error registering voter:', error);
      }
    },
    [contract]
  );

  return registerVoter;
};
