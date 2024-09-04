import React from "react";
import PollsCard from "../component/PollsCard";
import voting from "../component/assets/voting.png";
import votePh from "../component/assets/votePh.png";
import Filter from "../component/Filter";

function Polls() {
  return (
    <div className="pt-32 mx-52">
      <h1 className="text-[#00ACE3] text-2xl text-center font-semibold">
        View Poll
      </h1>
      <div className="flex gap-12 mt-12">
        <input
          type="text"
          name="numberOfParticipants"
          placeholder=" 🔍 Search for polls"
          className="bg-[#333333] p-2 w-[80%] focus:border-[#00ACE3] focus:border-2 rounded-md border border-white"
        />
        <button className="bg-[#00ACE3] py-2 px-8 rounded-md w-[20%] font-semibold">
          Search
        </button>
      </div>

      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <PollsCard
            title={"2024 Presidential Election"}
            paragraph={
              "Participate in the upcoming 2024 Presidential Election. Your vote will help decide the future leadership of our country. Ensure your voice is heard in this crucial election!"
            }
            date={"August 30, 2024"}
            pic={voting}
          />
          <PollsCard
            title={"Community Health Initiative"}
            paragraph={
              "Vote on the proposed community health initiative to improve local healthcare services. This poll will determine if the new healthcare programs will be implemented in our community."
            }
            date={"September 15, 2024"}
            pic={votePh}
          />
          <PollsCard
            title={"Community Health Initiative"}
            paragraph={
              "Vote on the proposed community health initiative to improve local healthcare services. This poll will determine if the new healthcare programs will be implemented in our community."
            }
            date={"September 15, 2024"}
            pic={votePh}
          />
          <PollsCard
            title={"Community Health Initiative"}
            paragraph={
              "Vote on the proposed community health initiative to improve local healthcare services. This poll will determine if the new healthcare programs will be implemented in our community."
            }
            date={"September 15, 2024"}
            pic={votePh}
          />
        </div>
        <div>
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Polls;
