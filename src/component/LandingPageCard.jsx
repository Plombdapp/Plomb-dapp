import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LandingPageCard({ pic, header, paragraph, button, onClick }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate("");
  };
  return (
    <div className="">
      <div>
        <div className="bg-[#313131] p-4 rounded-md shadow-gray-900 shadow-md border-t border-[#00ACE3] border-x">
          <div>
            <img
              src={pic}
              alt="card image"
              className="rounded-lg object-cover"
            />
            <h1 className="text-3xl mt-8">{header}</h1>
            <div className="flex items-start gap-2 mt-4">
              <p className="card-text">{paragraph}</p>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <div className="border-[#00ACE3] border-2 flex w-fit rounded-md px-4 py-2 gap-2 items-center">
              <button onClick={onClick} className="font-semibold">
                {button}
              </button>
              <FaArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageCard;
