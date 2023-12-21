import React from "react";
import { IoLockClosedSharp } from "react-icons/io5";

import { TbDatabaseX } from "react-icons/tb";
import { BsClockFill } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";

const RequestStats = () => {
  return (
    <div className="flex ml-[20px] space-x-10 ">
      <BoxWrapper>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-sm font-semibold text-natural">
              All Request
            </p>
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-2xl font-semibold text-black">
              4256
            </p>
          </div>

          <div className="mt-[28px] mr-[20px]  text-2xl text-white bg-sky-600 w-[58px] h-[58px] flex justify-center items-center rounded-lg">
            <IoLockClosedSharp />
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className=" flex justify-between items-center">
          <d className="flex flex-col">
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-sm font-semibold text-natural">
              Approved Request
            </p>
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-2xl font-semibold text-black">
              3254
            </p>
          </d>
          <div className="mt-[28px] mr-[20px]  text-2xl text-emerald  bg-teal-100 w-[58px] h-[58px] flex justify-center items-center rounded-lg">
            <AiFillDatabase />
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-sm font-semibold text-natural">
              Pending Request
            </p>
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-2xl font-semibold text-black">
              251
            </p>
          </div>
          <div className="bg-red-50 w-[58px] h-[58px] text-malta mt-[28px] mr-[20px]  text-2xl flex justify-center items-center rounded-lg">
            <BsClockFill />
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-sm font-semibold text-natural">
              Rejected Request
            </p>
            <p className=" pl-[18px] pt-[20px]  font-ciaro text-2xl font-semibold text-black">
              320
            </p>
          </div>
          <div className="bg-sky-100 w-[58px] h-[58px] text-sky-500 mt-[28px] mr-[20px]  text-2xl flex justify-center items-center rounded-lg">
            <TbDatabaseX />
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default RequestStats;
function BoxWrapper({ children }) {
  return (
    <div className="h-[115px] w-[254px] ml-[18px]   flex-1  bg-white rounded-lg  hover:scale-105 transition duration-200">
      {children}
    </div>
  );
}
