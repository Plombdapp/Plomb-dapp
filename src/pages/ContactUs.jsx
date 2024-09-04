import React from "react";

function ContactUs() {
  return (
    <div>
      <h1 className="text-[#00ACE3] text-2xl text-center font-semibold pt-32">
        Contact Us
      </h1>
      <form class="max-w-sm mx-auto mt-16">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-[#9E9E9E] dark:text-white"
          >
            Name
          </label>
          <input
            type="email"
            className="shadow-sm bg-[#333333] text-[#9E9E9E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Enter your full name"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-[#9E9E9E] dark:text-white"
          >
            Email
          </label>
          <input
            type="password"
            placeholder="Enter your email addess"
            class="shadow-sm bg-[#333333] text-[#9E9E9E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-[#9E9E9E] dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="password"
            placeholder="Enter your phone number"
            class="shadow-sm bg-[#333333] text-[#9E9E9E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#333333]-700 border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <form class="max-w-sm mx-auto">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-[#9E9E9E] dark:text-white"
          >
            Message
          </label>
          <textarea
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-[#333333] rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-[#333333]-700 border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave your message"
          ></textarea>
        </form>

        <div className="flex justify-between">
          <div></div>
          <button className="bg-[#00ACE3] px-6 py-2 rounded-md font-semibold mt-6 flex-end">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
