import { useCallback, useState } from 'react';
import { useContract } from './useContract';
import {CONTRACT_ABI} from '../abi/Voting.json';

export const useGetElection = () => {
    const CONTRACT_ADDRESS = '0x251E537Feaf1730Ac54d0F5aF120541Ec4C04210';
  const contract = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);
  const [election, setElection] = useState(null);


  const getElection= async (electionId) => {
    const result = await contract.methods.getElection(electionId).call();
    const candidates = result.candidates;
  
    // Display candidates with images
    candidates.forEach(candidate => {
      const imageUrl = `https://ipfs.infura.io/ipfs/${candidate.ipfsHash}`;
      console.log(`Candidate: ${candidate.name}, Image URL: ${imageUrl}`);
    });
  };
  

  // const getElection = useCallback(
  //   async (electionId) => {
  //     if (!contract) return;

  //     try {
  //       const electionDetails = await contract.getElection(electionId);
  //       setElection(electionDetails);
  //     } catch (error) {
  //       console.error('Error fetching election details:', error);
  //     }
  //   },
  //   [contract]
  // );

  return { election, getElection };
};
