import React from "react";
import { Link } from "react-router-dom";
import plomb from "../component/assets/plomb.png";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";



function Navbar({ initiateWalletConnection }) {
  return (
<<<<<<< HEAD
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
        onClick={} // Trigger the wallet connection on click
      >
        Connect Wallet
      </button> */}
      <ConnectButton client={client} /> 
=======
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
>>>>>>> ddcb4e569dcf5764fef80cb9b3c0b2dee3f5f16e
    </nav>
  );
}

export default Navbar;
