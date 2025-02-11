import React, { useState } from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <>
      <div className=" p-6 sm:py-10 py-3 shadow-md bg-[#FCFAFF] rounded-b-3xl">
        <div className="w-[120px] sm:w-[200px] md:[320px] cursor-pointer">
          <img src={Logo} alt="" />
        </div>
        <div className="flex  justify-center items-center mt-6 mx-auto">
          <p className="text-primary font-extrabold text-[36px] sm:text-[54px] sm:text-center">
            Transforming Psychology Education and <br/> Mental Healthcare
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-secondary font-extrabold text-[26px] sm:text-5xl">
            Innovate. Impart. Empower
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
