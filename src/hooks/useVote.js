import { useCallback } from 'react';
import { useContract } from './useContract';
import {CONTRACT_ABI} from '../abi/Voting.json';

export const useVote = () => {
  const CONTRACT_ADDRESS = '0x251E537Feaf1730Ac54d0F5aF120541Ec4C04210';
  const contract = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);

  const vote = useCallback(
    async (electionId, candidate) => {
      if (!contract) return;

      try {
        const tx = await contract.vote(electionId, candidate);
        await tx.wait(); // Wait for the transaction to be mined
        console.log('Vote cast successfully');
      } catch (error) {
        console.error('Error casting vote:', error);
      }
    },
    [contract]
  );

  return vote;
};
