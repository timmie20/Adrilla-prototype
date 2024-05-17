import React from "react";
import logo from "../assets/LOGO.svg";
import globe from "../assets/icons/image-removebg-preview 2.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import arrowDownFill from "../assets/icons/Vector (4).svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav mx-auto flex w-full max-w-[1263px] gap-4">
        <div className="flex max-w-[1040px] flex-1 items-center justify-between rounded-full border-[1px] border-[#FFFFFF38] bg-[#FFFFFF24] px-8 py-3">
          <img src={logo} alt="Adrilla logo" />
          <div className="nav_links flex gap-[47px] text-sm font-medium text-white">
            <span className="flex cursor-pointer items-center gap-2">
              Products <img src={arrowDownFill} />
            </span>
            <span className="flex cursor-pointer items-center">Business</span>
            <span className="flex cursor-pointer items-center gap-2">
              Company <img src={arrowDownFill} />
            </span>
            <span className="flex cursor-pointer items-center">Learn</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full border-[1px] border-[#FFEAFA] bg-[#D6ABFC]">
                <img src={globe} alt="world globe icon" />
              </span>
              <img src={arrowDown} alt="arrow down icon" />
            </div>
            <button className="h-[49px] w-[175px] rounded-[79px] bg-[#8807F7] p-2 text-sm text-white">
              Create Account
            </button>
          </div>
        </div>

        <div className="flex min-w-[199px] items-center justify-center gap-1 rounded-full border-[1px] border-[#FFFFFF38] bg-[#FFFFFF24] py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="text-sm">Personal</span>
            <img src={arrowDownFill} alt="arrow down" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
