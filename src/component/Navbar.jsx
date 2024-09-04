import React from "react";
import { Link } from "react-router-dom";
import plomb from "../component/assets/plomb.png";

function Navbar() {
  return (
    <nav className=" flex justify-between items-center p-4 border-b-2 border-b-[#00ACE3]  bg-[#313131] text-white">
      <div className="md:ml-12">
        <img src={plomb} alt="plomb-logo" className="hover:w-40 hover:h-10" />
      </div>
      <div className="text-md md:space-x-4 space-x-2 font-bold ml-2">
        <Link to="" href="/">
          Home
        </Link>
        <Link to="About">About Us</Link>
        <Link to="Contact">Contact Us</Link>
        <Link to="Faq">FAQ</Link>
      </div>
      <button className="bg-[#00ACE3] md:px-4 md:py-2 rounded-md font-semibold md:mr-12">
        <w3m-button />
      </button>
    </nav>
  );
}

export default Navbar;
