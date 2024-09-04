import { useCallback, useState } from 'react';
import { useContract } from './useContract';
import {CONTRACT_ABI} from '../abi/Voting.json';

export const useGetElection = () => {
    const CONTRACT_ADDRESS = '0x251E537Feaf1730Ac54d0F5aF120541Ec4C04210';
  const contract = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);
  const [election, setElection] = useState(null);

  const getElection = useCallback(
    async (electionId) => {
      if (!contract) return;

      try {
        const electionDetails = await contract.getElection(electionId);
        setElection(electionDetails);
      } catch (error) {
        console.error('Error fetching election details:', error);
      }
    },
    [contract]
  );

  return { election, getElection };
};
