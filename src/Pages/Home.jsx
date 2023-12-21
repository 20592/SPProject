import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DashboardStats from "../components/DashboardStats";
import BarChart from "../components/BarChart";
import PieComponent from "../components/PieComponent";
import LineComponent from "../components/LineComponent";
import ActivityFeed from "../components/ActivityFeed";
import Deliveries from "../components/Deliveries";

import TransactionChart from "../components/TransactionChart";
import TopSeller from "../components/TopSeller";

const Home = () => {
  return (
    <div className="h-full shadow-lg bg-slate-50">
      {/*dashboard and <P> */}
      <div className="flex justify-between items-center">
        <div className="mt-[33px] ml-[30px] mb-[27px] gap-11">
          <h1
            className=" w-[118px] h-[27px] font-cairo text-2xl
        font-bold  text-blue mb-3 "
          >
            Dashboard
          </h1>
          <p
            className="w-[258px] h-[30px]font-cairo text-base 
         font-semibold  text-slate-700 opacity-60"
          >
            Hello, James. Welcome to Synectiks
          </p>
        </div>
        {/*change period */}

        <div className=" w-[289px] h-[59px] bg-white mr-[35px] mt-[18px] rounded-lg flex justify-between items-center hover:scale-105 transition duration-200 ">
          <FaCalendarAlt className="w-7 h-7 mt-[14px] mb-[15px] ml-[19px] text-blue gap-x-5 " />
          <div className="  w-36 h-16 gap-1">
            <p className="w-[101px] h-[28px] text-sm font-semibold mt-2font-cairo text-darkPurple  ">
              Change-Period
            </p>
            <p className="w-[170px] h-[28px] my-0 mt-0 font-cairo font-normaltext-sm  text-natural">
              Mar-08th - Oct-08th,2021
            </p>
          </div>
          <IoMdArrowDropdown className=" flex items-center justify-center mr-[18px] mt-[27px] mb-[27px] text-natural" />
        </div>
      </div>
      <div className="flex mt-3">
        <DashboardStats />
      </div>
      <div className="flex gap-3">
        <BarChart />
        <div className="bg-white  w-[405px] h-[412px] rounded-lg my-7 ml-5 pt-2  hover:scale-105 transition duration-200">
          <div className="flex flex-col">
            <div className="flex  justify-around pt-2 pl-1 items-center">
              <p className="text-darkPurple text-lg font-semibold font-cairo  non-italic   ">
                Requisitions Stats
              </p>
              <button className=" w-[80px]  h-[31px] flex justify-center text-center  items-center border-2 rounded-lg  ">
                <div
                  className="flex justify-center  text-center items-center w-[41px] h-[15px]  py-8 px-4
        font-cairo text-xs font-medium ml-8"
                >
                  Month
                  <select
                    name="months"
                    id="cars"
                    className="w-[11px]  h-[7px] px-3"
                  >
                    <option value="jan"></option>
                    <option value="feb">feb</option>
                    <option value="march">march</option>
                    <option value="april">apri</option>
                  </select>
                </div>
                       
              </button>
            </div>
            <div className="px-14  py-8">
              <PieComponent />

              {}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1140px] h-[420px] ml-[32px] mt-[20px] rounded-lg bg-white hover:scale-105 transition duration-200">
        <LineComponent />
      </div>
      <div className="flex ">
        <ActivityFeed />
        <Deliveries/>
      </div>
      <div className="flex">
      <TransactionChart />
      <TopSeller/>
      </div>
   
   
    </div>
  );
};
export default Home;
