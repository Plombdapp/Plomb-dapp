import React from "react";

export const ContactUs = () => {
  return (
    <div className="bg-[#252525]">
      <h1 className="text-[#00ACE3] text-2xl text-center font-semibold">
        Contact Us
      </h1>
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="bg-[#333333] p-2 w-3/6 focus:border-[#00ACE3] focus:border-2 rounded-md block"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="bg-[#333333] p-2 w-3/6 focus:border-[#00ACE3] focus:border-2 rounded-md block"
            />
          </label>
          <label>
            Phone Number:
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              className="bg-[#333333] p-2 w-3/6 focus:border-[#00ACE3] focus:border-2 rounded-md block"
            />
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" cols="50" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
