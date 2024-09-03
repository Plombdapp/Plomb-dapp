import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="">
      {/* newsletter --------- */}
      <div class="flex flex-col text-center mt-40 text-white  ">
        <h1 class="text-2xl mb-6">
          Stay updated and always receive your weekly poll alerts!
        </h1>

        <div class="relative justify-center mx-72">
          <input
            type="text"
            placeholder="Enter your email address"
            class="bg-[#333333] p-4 w-full focus:border-[#00ACE3] focus:border-2 rounded-md"
          />
          <button class="absolute right-4  bg-[#00ACE3] text-white px-6 py-2 rounded-md font-semibold mt-2">
            Subscribe
          </button>
        </div>
      </div>
      {/* quick links---------- */}
      <footer class="mx-20 mt-40">
        <section class="flex justify-between">
          <div class="space-y-2">
            <h1 class="text-2xl font-bold">Support</h1>
            <p class="text-[#868686]">FAQ</p>
            <p class="text-[#868686]">Contact Us</p>
          </div>
          <div class="space-y-2">
            <h1 class="text-2xl font-bold">Quick Links</h1>
            <p class="text-[#868686]">Home</p>
            <p class="text-[#868686]">About Us</p>
            <p class="text-[#868686]">Features</p>
          </div>
          <div class="space-y-2">
            <h1 class="text-2xl font-bold">Legal</h1>
            <p class="text-[#868686]">Privacy Policy</p>
            <p class="text-[#868686]">Terms of Service</p>
            <p class="text-[#868686]">Cookie Policy</p>
          </div>
        </section>
        {/* <!-- connect with us --> */}
        <h2 class="mt-24">Connect with Us</h2>
        <div className="flex gap-4 mt-2">
          <FaDiscord className="w-6 h-6 text-[#00ACE3]" />
          <FaGithub className="w-6 h-6 text-[#00ACE3]" />
          <BsTwitterX className="w-6 h-6 text-[#00ACE3]" />
          <FaLinkedinIn className="w-6 h-6 text-[#00ACE3]" />
        </div>

        <h2 class="text-center text-lg text-[#EDEDED] mt-20">
          ©2024 PLOMB. All Rights Reserved.
        </h2>
      </footer>
    </div>
  );
}

export default Footer;
