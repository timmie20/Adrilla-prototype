import React from "react";
import Navbar from "./Navbar";
import phoneImg from "../assets/phone.png";

const Hero = () => {
  return (
    <>
      <div className="bg-customPurple h-screen pt-4">
        <Navbar />
        <main className="mx-auto flex w-[80%] flex-col items-center justify-center gap-6 text-white">
          <h1 className="animate-gradient bg-gradient-to-r from-[#FFEB35] to-[#19FD82FC] bg-clip-text text-[95px] font-extrabold text-transparent">
            Your Access To More
          </h1>
          <p className="w-[70%] text-center text-[15px]">
            Ardilla helps you save and invest in achieving your financial goals,
            we have the most flexible and seamless way to grow your funds.
          </p>
          <button className="rounded-full bg-white px-12 py-[18px] text-[#3D0072] ">
            Get started
          </button>
          <img src={phoneImg} alt="" className="w-[70%]" />
        </main>
      </div>
    </>
  );
};

export default Hero;
