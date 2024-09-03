import React from "react";
import voteimg from "../component/assets/first.jpg";
import HeroSection from "../component/HeroSection";
import Feature from "../component/Feature";
import Benefit from "../component/Benefit";
import LandingPageCard from "../component/LandingPageCard";
import votehand from "../component/assets/second-poll.png";
import createpoll from "../component/assets/create-poll.png";
import viewpolls from "../component/assets/forth-poll.png";
import bars from "../component/assets/fifth-poll.png";
import AboutPlomb from "../component/AboutPlomb";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <main className="">
      <HeroSection />
      <div className="grid grid-cols-3 pt-32">
        <div className="col-span-2 space-y-4">
          <h1 className="mx-28 mb-8 text-3xl font-semibold">Features</h1>
          <Feature
            title="Decentralized Voting"
            text1="Utilizes blockchain technology for secure, transparent, and immutable voting records."
            text2="Smart contracts automate the execution of voting rules and results."
            pic={voteimg}
          />
          <Feature
            title="Wallet Integration"
            text1="Allows users to connect their crypto wallets (e.g., MetaMask) for secure login and authentication."
            text2="Ensures secure transactions using blockchain technology."
            pic={voteimg}
          />
          <Feature
            title="User Verification"
            text1="Implements a robust verification process to ensure the legitimacy of voters, including ID, date of birth, gender, and state of origin."
            text2="Instant verification using Wallet"
            pic={voteimg}
          />
        </div>
        <div>
          <h1 className="mx-28 mb-8 text-3xl font-semibold">Benefits</h1>
          <Benefit />
        </div>
      </div>
      <div className="mt-32 grid grid-cols-2 mx-28 gap-20">
        {/* Card 1: Create Poll */}
        <LandingPageCard
          pic={createpoll}
          header="Create Your Own Poll"
          paragraph="Take control of the voting process by creating your own poll. As an admin, you can set up the poll with participant images, party affiliations, and voting durations. Empower your community to voice their opinions with a few simple steps."
          button="Create Poll"
          onClick={() => handleClick("/Admin")} // Navigate to Admin page
        />

        {/* Card 2: Join Poll */}
        <LandingPageCard
          pic={votehand}
          header="Join an Ongoing Poll"
          paragraph="Your vote matters! Participate in ongoing polls after a quick verification process. Confirm your identity and cast your vote in real-time. Engage in the democratic process and make your choice count."
          button="Vote Now"
          onClick={() => handleClick("/Vote")} // Navigate to voting page
        />

        <LandingPageCard
          pic={viewpolls}
          header="Explore Upcoming Polls"
          paragraph="Stay informed about future voting events. View detailed information about upcoming polls and get ready to participate. Don’t miss out on the chance to have your say in upcoming decisions."
          button="View Polls"
          onClick={() => handleClick("/Polls")} // Navigate to polls page
        />

        {/* Card 4: Review Past Polls */}
        <LandingPageCard
          pic={bars}
          header="Review Past Polls"
          paragraph="Access the results of previous polls and see how the community voted. Analyze past data and provide feedback to help improve future voting processes. Your insights are valuable and very crucial to us."
          button="View Results"
          onClick={() => handleClick("/Results")} // Navigate to results page
        />
      </div>
      <AboutPlomb />
    </main>
  );
}

export default LandingPage;
