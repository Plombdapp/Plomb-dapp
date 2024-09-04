import { useCallback } from 'react';
import { useContract } from './useContract';
import {CONTRACT_ABI } from '../abi/Voting.json';

export const useCreateElection = () => {
  const CONTRACT_ADDRESS = '0x251E537Feaf1730Ac54d0F5aF120541Ec4C04210';
  const contract = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);

  // const createElection = useCallback(
  //   async (pollTitle, country, startMinutesFromNow, durationMinutes, candidateNames) => {
  //     if (!contract) return;

  //     try {
  //       const tx = await contract.createElection(
  //         pollTitle,
  //         country,
  //         startMinutesFromNow,
  //         durationMinutes,
  //         candidateNames
  //       );
  //       await tx.wait(); // Wait for the transaction to be mined
  //       console.log('Election created successfully');
  //     } catch (error) {
  //       console.error('Error creating election:', error);
  //     }
  //   },
  //   [contract]
  // );


  // Example function to create an election with candidates' IPFS hashes
const createElection = async (pollTitle, country, startMinutesFromNow, durationMinutes, candidateData) => {
  // Assuming `candidateData` is an array of objects with `name` and `imageFile`
  const candidates = await Promise.all(candidateData.map(async (data) => {
    const ipfsHash = await uploadImage(data.imageFile);
    return {
      name: data.name,
      ipfsHash: ipfsHash
    };
  }));

  // Call the smart contract function to create the election
  await contract.methods.createElection(pollTitle, country, startMinutesFromNow, durationMinutes, candidates).send({ from: userAddress });
};


  return createElection;
};
