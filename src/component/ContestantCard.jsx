import React from "react";
import contestant from "../component/assets/contestant.png";
import labour from "../component/assets/Labour_logo.png";

function ContestantCard() {
  return (
    <div className="bg-[#313131] hover:border-2 hover:border-[#00ACE3] rounded-md p-4 ">
      <div className="">
        <img src={contestant} alt="" className="relative object-cover " />
        <img
          src={labour}
          alt="contest-logo"
          className="absolute -mt-20 object-cover "
        />
      </div>
      <h1 className="text-md text-center mt-4">Olumide Akpata</h1>
    </div>
  );
}

export default ContestantCard;
