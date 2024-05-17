import React from "react";
import Card from "../components/Cards/Card";
import { FaChevronDown } from "react-icons/fa";
import Carousel from "../components/Carousel/Carousel";
import heroLeftImg from "../assets/images/hero-left-decorator-removebg-preview.png";
import heroRightImg from "../assets/images/hero-right-decorator-removebg-preview.png";
import normalBear from "../assets/images/hero-bear-lg.png";
import stylishBear from "../assets/images/hero-bear-md.png";

const Book = () => {
  return (
    <>
      {/* Hero Section  */}
      <div className="w-full h-full flex flex-row relative">
        <img
          className="w-[50px] md:w-[234px] md:h-[390px] absolute left-0 top-28 md:top-20"
          src={heroLeftImg}
          alt=""
        />
        <div className="w-full md:w-[858px] gap-[40px] mx-auto mt-[157px] mb-[93px] font-[400] flex flex-col px-2">
          <div className="w-full gap-[38px] flex flex-row justify-between">
            <div className="gap-[24px] w-[339px] flex flex-col">
              <img src={normalBear} alt="" />
              <div className="w-[103px] mx-auto">
                <h1 className="text-[32px] text-opacity-70">Parent X</h1>
              </div>
            </div>
            <div className="size-[104px]  my-auto"></div>
            <div className="gap-[24px] w-[339px] flex flex-col">
              <img className="object-cover" src={stylishBear} alt="" />
              <div className="w-[103px] mx-auto">
                <h1 className="text-[32px] text-opacity-70">Parent Y</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[68px] flex justify-center items-center text-[36px] rounded-lg bg-[#42bfe8]">
            Book Now!
          </div>
        </div>

        <img
          className="w-[50px] md:w-[234px] md:h-[390px] absolute right-0 top-28 md:top-20"
          src={heroRightImg}
          alt=""
        />
      </div>
      {/* Hero Section  */}

      <div className="w-full md:w-[858px] gap-[40px] mx-auto mb-[140px] font-[400] flex flex-col">
        <div className="w-full md:w-[501px] mx-auto">
          <h1 className="text-[50px] w-full text-center md:text-left">Choose 2 Dwarves to Breed</h1>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-[20px]">
          <div className=" flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
            <img
              className="w-full rounded-tr-lg rounded-tl-lg"
              src={stylishBear}
              alt=""
            />
            <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
              <div className="w-full gap-[12px]">
                <h1 className="text-[26px] w-[141px] opacity-70">Bear 2</h1>
                <h1 className="text-[26px] w-[141px]">#2</h1>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
            <img
              className="w-full rounded-tr-lg rounded-tl-lg"
              src={stylishBear}
              alt=""
            />
            <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
              <div className="w-full gap-[12px]">
                <h1 className="text-[26px] w-[141px] opacity-70">Bear 2</h1>
                <h1 className="text-[26px] w-[141px]">#2</h1>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
            <img
              className="w-full rounded-tr-lg rounded-tl-lg"
              src={stylishBear}
              alt=""
            />
            <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
              <div className="w-full gap-[12px]">
                <h1 className="text-[26px] w-[141px] opacity-70">Bear 2</h1>
                <h1 className="text-[26px] w-[141px]">#2</h1>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
            <img
              className="w-full rounded-tr-lg rounded-tl-lg"
              src={stylishBear}
              alt=""
            />
            <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
              <div className="w-full gap-[12px]">
                <h1 className="text-[26px] w-[141px] opacity-70">Bear 2</h1>
                <h1 className="text-[26px] w-[141px]">#2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
    </>
  );
};

export default Book;
