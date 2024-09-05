// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/Voting.sol";

contract VotingTest is Test {
    Voting voting;
    address zkmeVerifyContract = address(0x123); // Mock zkmeVerify contract
    address cooperator = address(0x456);         // Mock cooperator

    function setUp() public {
        // Deploy the Voting contract before each test
        voting = new Voting(zkmeVerifyContract, cooperator);
    }

    function testCreateElection() public {
        Voting.Candidate;
        candidates[0] = Voting.Candidate({name: "Candidate A", ipfsHash: "QmHashA"});
        candidates[1] = Voting.Candidate({name: "Candidate B", ipfsHash: "QmHashB"});

        voting.createElection("Test Election", "Nigeria", 0, 60, candidates);

        // Verify the election was created
        (
            string memory pollTitle,
            string memory country,
            uint256 startTime,
            uint256 endTime,
            Voting.Candidate[] memory returnedCandidates,
            uint256[] memory votes
        ) = voting.getElection(1);
        
        assertEq(pollTitle, "Test Election");
        assertEq(country, "Nigeria");
        assertEq(returnedCandidates.length, 2);
        assertEq(keccak256(abi.encodePacked(returnedCandidates[0].name)), keccak256(abi.encodePacked("Candidate A")));
        assertEq(keccak256(abi.encodePacked(returnedCandidates[1].name)), keccak256(abi.encodePacked("Candidate B")));
    }

    function testRegisterVoter() public {
        string memory country = "Nigeria";

        // Register the voter
        voting.registerVoter(country);

        // Verify voter registration
        (address voterAddress, string memory registeredCountry, bool registered, bool hasVoted) = voting.voters(address(this));
        assertEq(voterAddress, address(this));
        assertEq(keccak256(abi.encodePacked(registeredCountry)), keccak256(abi.encodePacked(country)));
        assertEq(registered, true);
        assertEq(hasVoted, false);
    }

    function testVote() public {
        // Create a mock election with two candidates
        Voting.Candidate;
        candidates[0] = Voting.Candidate({name: "Candidate A", ipfsHash: "QmHashA"});
        candidates[1] = Voting.Candidate({name: "Candidate B", ipfsHash: "QmHashB"});

        voting.createElection("Test Election", "Nigeria", 0, 60, candidates);
        voting.registerVoter("Nigeria");

        // Mocking the zkME verification
        vm.mockCall(zkmeVerifyContract, abi.encodeWithSelector(ZKMEVerifyUpgradeable.hasApproved.selector), abi.encode(true));

        // Vote for a candidate
        voting.vote(1, "Candidate A");

        // Verify vote counts
        uint256 candidateAVotes = voting.getCandidateVotes(1, "Candidate A");
        uint256 candidateBVotes = voting.getCandidateVotes(1, "Candidate B");

        assertEq(candidateAVotes, 1);
        assertEq(candidateBVotes, 0);
    }

    function testGetWinner() public {
        // Create a mock election with two candidates
        Voting.Candidate;
        candidates[0] = Voting.Candidate({name: "Candidate A", ipfsHash: "QmHashA"});
        candidates[1] = Voting.Candidate({name: "Candidate B", ipfsHash: "QmHashB"});

        voting.createElection("Test Election", "Nigeria", 0, 60, candidates);
        voting.registerVoter("Nigeria");

        // Mocking the zkME verification
        vm.mockCall(zkmeVerifyContract, abi.encodeWithSelector(ZKMEVerifyUpgradeable.hasApproved.selector), abi.encode(true));

        // Vote for Candidate A
        voting.vote(1, "Candidate A");

        // Check the winner
        string memory winner = voting.getWinner(1);
        assertEq(winner, "Candidate A");
    }
}
