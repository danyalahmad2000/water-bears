import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-[289px] flex flex-col text-center mx-auto">
          <h1 className="text-[32px] mb-[18px]">Contact Us</h1>
          <p className="text-[24px] mb-[28px]">tardigrades@gmail.com</p>
          <div className="flex flex-row gap-[16px] mx-auto">
            <div className="flex justify-center items-center size-[30px] md:size-[40px] bg-[#42bfe8] rounded-lg">
              <FaTwitter className="size-[25px]" />
            </div>
            <div className="flex justify-center items-center size-[30px] md:size-[40px] bg-[#42bfe8] rounded-lg">
              <FaDiscord className="size-[25px]" />
            </div>
            <div className="flex justify-center items-center size-[30px] md:size-[40px] bg-[#42bfe8] rounded-lg">
              <FaTelegramPlane className="size-[25px]" />
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-white mt-[37px]"></div>

        <div className="w-[289px] text-[18px] mx-auto text-center">Copyright 2024. All rights reserved</div>
      </div>
    </>
  );
};

export default Footer;
