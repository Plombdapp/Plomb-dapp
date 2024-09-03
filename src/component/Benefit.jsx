import React from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";

function Benefit() {
  return (
    <div className="mr-28">
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-12 ">
          <span class="absolute flex items-center justify-center    -start-5  ">
            <IoShieldCheckmarkOutline className="text-[#00ACE3] text-4xl bg-[#252525] py-4 h-20 w-10" />
          </span>
          <h3 class="flex items-center  mb-4 text-2xl font-semibold text-[#00ACE3] mt-8  ">
            Enhanced Security
          </h3>
          <time class="block mb-2 text-base font-normal leading-none  ">
            Immutable voting records on the <br />
            blockchain prevent tampering and
            <br /> fraud.
          </time>
          <p class="mb-4 mt-4 text-base font-normal">
            Secure user verification ensures only eligible voters can
            participate.
          </p>
        </li>
        <li class="mb-10 ms-12">
          <span class="absolute flex items-center justify-center    -start-5  ">
            <FaSearch className="text-[#00ACE3] text-4xl bg-[#252525] py-4 h-20 w-10" />
          </span>
          <h3 class="flex items-center mb-4  text-2xl font-semibold text-[#00ACE3]  ">
            Transparency
          </h3>
          <time class="block mb-2 text-base font-normal leading-none  ">
            Public ledger allows for auditing of all votes.
          </time>
          <p class="mb-4  mt-4 text-base font-normal">
            Open results promote trust in the voting process.
          </p>
        </li>
        <li class="ms-12 mb-10">
          <span class="absolute flex items-center justify-center    -start-5  ">
            <BsPersonArmsUp className="text-[#00ACE3] text-4xl bg-[#252525] py-4 h-20 w-10" />
          </span>
          <div className="-m">
            <h3 class="flex items-center mb-4 text-2xl font-semibold text-[#00ACE3]  ">
              Accessiblility
            </h3>
            <time class="block mb-2 text-base font-normal leading-none  ">
              Enables global participation for anyone with an internet
              connection and a crypto wallet.
            </time>
            <p class="mt-4 text-base font-normal mb-4">
              User-friendly interface simplifies the voting process for all
              users.
            </p>
          </div>
        </li>
        <li class="ms-12 mb-10">
          <span class="absolute flex items-center justify-center    -start-5  ">
            <MdOutlineSecurity className="text-[#00ACE3] text-4xl bg-[#252525] py-4 h-20 w-10" />
          </span>
          <h3 class="flex items-center mb-4 text-2xl font-semibold text-[#00ACE3]  ">
            Identity Protection Using Zero Knowledge
          </h3>
          <time class="block mb-2 text-base font-normal leading-none  ">
            Your personal information is protected through advanced encryption
            methods, ensuring your identity remains confidential while you
            participate in the voting process.
          </time>
          <p class="mt-4 text-base font-normal">
            With PLOMB, you can vote with peace of mind, knowing your privacy is
            safeguarded.
          </p>
        </li>
      </ol>
    </div>
  );
}
export default Benefit;
