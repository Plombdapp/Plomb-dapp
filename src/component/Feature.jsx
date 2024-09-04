import React from "react";
import { FaSquareFull } from "react-icons/fa";

function Feature({ title, text1, text2, pic }) {
  return (
    <div className="md:mx-28 mx-8">
      <div>
        <div className="bg-[#313131] flex p-4 rounded-md shadow-gray-900 shadow-md gap-4">
          <div>
            <h1 className="text-3xl mt-8">{title}</h1>
            <div className="flex items-start gap-2 mt-4">
              <FaSquareFull className="text-[#00ACE3] mt-1 w-4" />
              <p className="card-text">{text1}</p>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <FaSquareFull className="text-[#00ACE3] mt-1 w-4" />
              <p className="card-text">{text2}</p>
            </div>
          </div>
          <img
            src={pic}
            alt="card image"
            className="rounded-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
