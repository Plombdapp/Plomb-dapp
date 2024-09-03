import React from "react";
import { Link } from "react-router-dom";
import plomb from "../component/assets/plomb.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 border-b-[#00ACE3]  bg-[#313131] text-white">
      <div className="ml-12">
        <img src={plomb} alt="plomb-logo" className="hover:w-40 hover:h-10" />
      </div>
      <div className="text-md space-x-4 font-bold">
        <Link to="" href="/">
          Home
        </Link>
        <Link to="" href>
          Features
        </Link>
        <Link to="" href="/about">
          About Us
        </Link>
        <Link to="" href="/contact">
          Contact Us
        </Link>
      </div>
      <button className="bg-[#00ACE3] px-4 py-2 rounded-md font-semibold mr-12">
        Connect Wallet
      </button>
    </nav>
  );
}

export default Navbar;
