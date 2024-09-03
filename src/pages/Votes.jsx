import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import ContestantCard from "../component/ContestantCard";

const Votes = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);   

  };

  const handleSubmit = () => {
    if (selectedOption)   
 {
      // Replace 'images/option1.jpg' with the actual image path for the selected option
      navigate(`/ContestantCard/${selectedOption}.png`);
    }
  };

  return (
    <div className="mx-52 pt-20">
      <h1 className="text-center text-4xl text-[#00ACE3] font-lg ">Vote Now</h1>
      <h1 className="mb-6 mt-12 text-xl">Poll Details</h1>
      <select value={selectedOption} onChange={handleOptionChange}
        id="country"
        name="country"
        className="bg-[#333333] p-2 w-50% focus:border-[#00ACE3] focus:border-2 rounded-md text-center"
      >
        <option value>Select Election</option>
        <option value="edo" onClick={handleSubmit}>Edo State Election</option>
        <option value="icon" onClick={handleSubmit}>Icon Man of the year</option>
        <option value="ca" onClick={handleSubmit}>Best Graduating Student</option>
        <option value="gb" onClick={handleSubmit}>Presidential Election</option>
        <option value="au" onClick={handleSubmit}>Best Hacker</option>
      </select>

      <div className="mt-4">
        <div className="grid grid-cols-3 gap-16">
          <ContestantCard />
          <ContestantCard />
          <ContestantCard />
        </div>
        <div className="flex justify-end mt-24 gap-4">
          <button className="bg-[#00ACE3] px-4 py-2 rounded-md font-semibold">
            Create Poll
          </button>
          <button className="bg-[#333333] px-4 py-2 rounded-md font-semibold">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Votes;
