import React from "react";

function Team({ pic, fullName, job }) {
  return (
    <div>
      <img src={pic} alt="" />
      <h1 className="text-center text-[#00ACE3]">{fullName}</h1>
      <h3 className="text-center">{job}</h3>
    </div>
  );
}

export default Team;
