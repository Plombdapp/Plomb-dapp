import React, { useState } from 'react';
import useVotingContract from '../hooks/useVotingContract';
import { uploadToPinata } from '../constant/pinata';

const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

const VotingComponent = () => {
  const { currentAccount, registerVoter, vote, getElection, getWinner } = useVotingContract(contractAddress);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (file) {
      try {
        const pinataUrl = await uploadToPinata(file);
        console.log('File uploaded to Pinata:', pinataUrl);
      } catch (error) {
        console.error('File upload failed:', error);
      }
    }
  };

  return (
    <div>
      <h1>Voting DApp</h1>
      <p>Connected Account: {currentAccount}</p>
      
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload to Pic</button>
      
      {/* Example of registering a voter */}
      <button onClick={() => registerVoter("CountryName")}>Register as Voter</button>
      
      {/* Example of voting */}
      <button onClick={() => vote(1, "CandidateName")}>Vote</button>
    </div>
  );
};

export default VotingComponent;
