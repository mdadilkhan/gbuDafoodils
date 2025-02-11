import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import left from "../assets/left.jpeg";
import right from "../assets/right.jpeg";
import UpArrow from '../assets/UpArrow.svg'

const Home = () => {
  return (
    <>
      <Header />

      <div className="bg-white  mt-6 p-4 rounded-t-3xl">
        <div className=" sm:flex  sm:px-[130px] hidden gap-20">
          <div className="w-1/2 text-left flex items-center gap-1">
            <span className="font-bold text-primary text-[20px] font-sans ">
              For Undergraduate Students
            </span>
            <img src={UpArrow} alt="" />
            <hr className="w-[220px] bg-primary h-[2px] " />
          </div>
          <div className="w-1/2 text-right flex  items-center gap-1">
            <span className="font-bold text-primary text-[20px] font-sans ">
             For Postgraduate Students
            </span>
            <img src={UpArrow} alt="" />
            <hr className="w-[240px] bg-primary h-[2px] " />
       
          </div>
        </div>

       
        


        <div className=" flex px-1 w-full sm:hidden">
          <div className=" text-left flex items-center gap-2">
            <span className="font-bold text-primary text-[14px] font-sans ">
              Undergraduates Students
            </span>
            <img src={UpArrow} alt="" />
            <hr className="w-[190px] bg-primary h-[2px] " />
          </div>
        </div>

        <div className=" flex justify-center items-center sm:gap-16 gap-4 sm:flex-row flex-col">
          <div className=" bg-[#FCFAFF] p-4 flex flex-col items-center gap-3 rounded-xl shadow-lg w-full sm:w-[40%]">
            <div className="overflow-hidden">
              <img
                className="h-[271px] w-[625px] object-cover rounded-xl"
                src={right}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-primary font-extrabold text-[18px] sm:text-2xl">
                  Mastering the Essentials : Foundations of Counseling Skills{" "}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-20">
                  <p className="text-[16px] text-primary font-light w-1/2">
                    For Undergraduate Students
                  </p>
                  <p className="text-[16px] text-primary font-light w-1/2">
                    Duration : 30 Hours
                  </p>
                </div>
                <div className="flex gap-20">
                  <p className="text-[16px] text-primary font-light w-1/2">
                    Mode : Online/Offline
                  </p>
                  <p className="text-[16px] text-primary font-light w-1/2">
                    Batches : Weekend
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-secondary w-[221px] h-[50px] rounded-xl">
                <a
                  href="https://hitthepuasev3.web.app"
                  target="_blank"
                >
                  <span className=" text-primary">EXPLORE</span>
                </a>
              </button>
            </div>
          </div>


          <div className=" flex px-1 w-full  sm:hidden">
          <div className=" text-left flex items-center gap-2">
            <span className="font-bold text-primary text-[14px] font-sans ">
              Postgraduates Students
            </span>
            <img src={UpArrow} alt="" />
            <hr className="w-[190px] bg-primary h-[2px] " />
          </div>
        </div>
          {/* <div className="bg-[#F4EDFF] w-[1px]">
cjhbdshbcs
          </div> */}
          <div className=" bg-[#FCFAFF] p-4 flex flex-col items-center gap-3 rounded-xl shadow-lg w-full sm:w-[40%]">
            <div className="overflow-hidden">
              <img
                className="h-[271px] w-[625px] object-cover rounded-xl"
                src={left}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-primary font-extrabold text-[18px] sm:text-2xl">
                  
                  Therapeutic Threads : Weaving Skills into Counseling Practice
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-20">
                  <p className="text-[16px] text-primary font-light w-1/2">
                  For Postgraduate Students
                  </p>
                  <p className="text-[16px] text-primary font-light w-1/2">
                    Duration : 30 Hours
                  </p>
                </div>
                <div className="flex gap-20">
                  <p className="text-[16px] text-primary font-light w-1/2">
                    Mode : Online/Offline
                  </p>
                  <p className="text-[16px] text-primary font-light w-1/2">
                    Batches : Weekend
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-secondary w-[221px] h-[50px] rounded-xl">
                <a
                  href="https://hitthepause.web.app"
                  target="_blank"
                >
                  <span className=" text-primary">EXPLORE</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
