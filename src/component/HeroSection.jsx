import React from "react";
import { useNavigate } from "react-router-dom";
import heroimg from "../component/assets/heroimg.png";

function HeroSection() {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/Admin");
  }
  return (
    <div>
      <div className="flex justify-between mx-28 pt-32">
        <div>
          <h1 className="text-5xl font-bold">
            Welcome to PLOMB <br />
            The Future of
            <br />
            <span className="text-[#00ACE3]">Decentralized Voting</span>
          </h1>
          <h4 className="text-2xl font-semibold mt-4">
            Eliminating Voting Rigging with <br /> Blockchain Technology
          </h4>
          <p className="text-md mt-2">
            Detailed description of the project, emphasizing the <br /> The
            future of Decentralized Voting, how it eliminates <br /> rigging,
            and improves transparency.
          </p>
          <button onClick={handleClick} className="bg-[#00ACE3] mt-8 rounded-md py-2 px-6 font-semibold ">
            Create Poll
          </button>
        </div>

        <div className="">
          <img src={heroimg} alt="heroImg" className="h-96" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
