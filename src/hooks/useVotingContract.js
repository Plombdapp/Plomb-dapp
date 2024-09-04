import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import VotingContractABI from '../abi/Voting.json'; // Import your contract ABI

const useVotingContract = (contractAddress) => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, VotingContractABI, signer);

        const accounts = await provider.send('eth_requestAccounts', []);
        setCurrentAccount(accounts[0]);
        setProvider(provider);
        setSigner(signer);
        setContract(contract);
      } else {
        console.error("Please install MetaMask!");
      }
    };

    initProvider();
  }, [contractAddress]);

  const registerVoter = async (country) => {
    try {
      const tx = await contract.registerVoter(country);
      await tx.wait();
    } catch (error) {
      console.error("Error registering voter:", error);
    }
  };

  const vote = async (electionId, candidateName) => {
    try {
      const tx = await contract.vote(electionId, candidateName);
      await tx.wait();
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const getElection = async (electionId) => {
    try {
      const election = await contract.getElection(electionId);
      return election;
    } catch (error) {
      console.error("Error getting election:", error);
    }
  };

  const getWinner = async (electionId) => {
    try {
      const winner = await contract.getWinner(electionId);
      return winner;
    } catch (error) {
      console.error("Error getting winner:", error);
    }
  };

  return {
    currentAccount,
    registerVoter,
    vote,
    getElection,
    getWinner,
  };
};

export default useVotingContract;
