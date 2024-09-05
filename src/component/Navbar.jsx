import React from "react";
import { Link } from "react-router-dom";
import plomb from "../component/assets/plomb.png";
import { ConnectButton } from "thirdweb/react"; // If you're using thirdweb, keep this
import { client } from "../client"; // Ensure client is properly initialized

function Navbar({ initiateWalletConnection }) {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 border-b-[#00ACE3] bg-[#313131] text-white">
      <div className="ml-12">
        <img src={plomb} alt="plomb-logo" className="hover:w-40 hover:h-10" />
      </div>
      <div className="text-md space-x-4 font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/features" className="hover:underline">
          Features
        </Link>
        <Link to="/about" className="hover:underline">
          About Us
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact Us
        </Link>
      </div>

      {/* Connect Wallet Button */}
      {/* <button
        className="bg-[#00ACE3] px-4 py-2 rounded-md font-semibold mr-12"
        onClick={initiateWalletConnection} // Trigger wallet connection on click
      >
        Connect Wallet
      </button> */}

      
       <ConnectButton client={client} />
    </nav>
  );
}

export default Navbar;
