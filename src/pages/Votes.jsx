import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContestantCard from "../component/ContestantCard";
import zkMeVerifyAbi from '@zkmelabs/verify-abi';
import { Contract, JsonRpcProvider } from 'ethers';

const rpcUrl = "YOUR_RPC_URL"; // Replace with your RPC URL
const dappAccount = "YOUR_DAPP_ACCOUNT"; // Replace with your DApp account
const userWalletAddress = "YOUR_USER_WALLET_ADDRESS"; // Replace with the user's wallet address

const Votes = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isVerified, setIsVerified] = useState(false); // Track if the user has verified
  const navigate = useNavigate();

  // This function checks if the user is verified for voting
  const handleVerification = async () => {
    try {
      const zkMeContract = new Contract(
        '0x251E537Feaf1730Ac54d0F5aF120541Ec4C04210', // Contract address
        zkMeVerifyAbi,
        new JsonRpcProvider(rpcUrl) // Provider
      );

      const result = await zkMeContract.hasApproved(dappAccount, userWalletAddress);
      if (result) {
        setIsVerified(true); // Update state to reflect that the user is verified
      }
    } catch (error) {
      console.error("Error during verification:", error);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      navigate(`/ContestantCard/${selectedOption}.png`);
    }
  };

  return (
    <div className="mx-52 pt-20">
      <h1 className="text-center text-4xl text-[#00ACE3] font-lg">Vote Now</h1>
      <h1 className="mb-6 mt-12 text-xl">Poll Details</h1>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        id="country"
        name="country"
        className="bg-[#333333] p-2 w-50% focus:border-[#00ACE3] focus:border-2 rounded-md text-center"
      >
        <option value="">Select Election</option>
        <option value="edo">Edo State Election</option>
        <option value="icon">Icon Man of the year</option>
        <option value="ca">Best Graduating Student</option>
        <option value="gb">Presidential Election</option>
        <option value="au">Best Hacker</option>
      </select>

      <div className="mt-4">
        <div className="grid grid-cols-3 gap-16">
          <ContestantCard />
          <ContestantCard />
          <ContestantCard />
        </div>
        <div className="flex justify-end mt-24 gap-4">
          {/* Verify Button */}
          <button
            className={`bg-[#00ACE3] px-4 py-2 rounded-md font-semibold ${isVerified ? 'cursor-not-allowed' : ''}`}
            onClick={handleVerification}
            disabled={isVerified} // Disable button once verified
          >
            {isVerified ? 'Verified' : 'Verify'} {/* Change text based on verification */}
          </button>

          {/* Vote Button */}
          <button
            className={`bg-[#00ACE3] px-4 py-2 rounded-md font-semibold ${!isVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleSubmit}
            disabled={!isVerified} // Disable vote button until verified
          >
            Vote now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Votes;
