import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Circle } from "rc-progress";
import CountUp from "react-countup";

const DashboardStats = () => {
  return (
    <div className="flex flex-row mr-[33px] w-full">
      <BoxWrapper>
        <div className=" flex flex-row mt-[7px] ml-[18px]">
          {/**stats1 */}
          <div className="flex flex-col ">
            <div className="w-[127px] h-[26px]">
              <p
                className=" font-cairo text-sm font-semibold
             text-natural not-italic leading-normal"
              >
                Purchase Requisition
              </p>
            </div>
            <div className="w-[54px] h-[45px]">
              <p className="text-2xl text-darkPurple font-cairo font-semibold not-italic leading-normal">
                <CountUp start={0} end={4256} delay={1} />
              </p>
            </div>

            <div className="flex justify-center items-center mb-[10px] pb-[8px] ">
              <div className="  flex justify-center items-center bg-teal-50 rounded-full mb-[13px] w-[18px] h-[18px] m-[3px]">
                <FaArrowTrendUp className=" flex justify-center items-center text-xs text-emerald w-3 h-3 m-[3px]" />
              </div>
              <div className=" ml-[9px] w-[88px] h-[22px]">
                <p className=" flex justify-center  mb-[8px] items-center text-zinc text-xs font-cairo font-normal not-italic leading-normal">
                  +14% Last Month
                </p>
              </div>
            </div>
          </div>
          {/**stats2 */}
          <div className="relative mt-2 mr-5 ml-5 roundedProgress">
            <Circle
              percent={74}
              strokeWidth={10}
              strokeColor="#38CB89"
              trailWidth={8}
              trailColor="#EDF1FB"
            />
            <p className="absolute top-6 left-5 flex justify-center items-center font-cairo text-xs font-semibold leading-normal text-black not-italic">
              +74%
            </p>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex flex-row mt-[10px] ml-[18px]">
          {/**stats1 */}
          <div className="flex flex-col ">
            <div className="w-[127px] h-[26px]">
              <p
                className=" font-cairo text-sm font-semibold
             text-natural not-italic leading-normal"
              >
                Purchase Order
              </p>
            </div>
            <div className="w-[54px] h-[45px]">
              <p className="text-2xl text-darkPurple font-cairo font-semibold not-italic leading-normal">
                <CountUp start={0} end={3045} delay={1} />
              </p>
            </div>

            <div className="flex justify-center place-items-center mb-[10px] pb-[8px]  ">
              <div className="  flex justify-center items-center bg-orange-50 rounded-full mb-[13px]  m-[3px] w-[18px] h-[18px] ">
                <FaArrowTrendUp className=" flex justify-center items-center text-xs text-malta w-3 h-3 m-[3px]" />
              </div>
              <div className=" ml-[9px] w-[88px] h-[22px]">
                <p className=" flex justify-center  mb-[8px] items-center text-zinc text-xs font-cairo font-normal not-italic leading-normal">
                  +14% Last Month
                </p>
              </div>
            </div>
          </div>
          {/**stats2 */}
          <div className="relative mt-2 mr-5 ml-5 roundedProgress">
            <Circle
              percent={74}
              strokeWidth={10}
              strokeColor=" #FFA600"
              trailWidth={8}
              trailColor="#EDF1FB"
            />
            <p className="absolute top-6 left-5 flex justify-center items-center font-cairo text-xs font-semibold leading-normal text-black not-italic">
              +74%
            </p>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex flex-row mt-[13px] ml-[18px]">
          {/**stats1 */}
          <div className="flex flex-col ">
            <div className="w-[127px] h-[26px]">
              <p
                className=" font-cairo text-sm font-semibold
             text-natural not-italic leading-normal"
              >
                Invoice count
              </p>
            </div>
            <div className="w-[54px] h-[45px]">
              <p className="text-2xl text-darkPurple font-cairo font-semibold not-italic leading-normal">
                <CountUp start={0} end={1055} delay={1} />
              </p>
            </div>

            <div className="flex justify-start items-center   mb-[10px] pb-[8px] ">
              <div className="  flex justify-center items-center bg-red-50 rounded-full mb-[13px] w-[18px] h-[18px] m-[3px]">
                <FaArrowTrendUp className=" flex justify-center items-center text-xs text-tomato w-3 h-3 m-[3px]" />
              </div>
              <div className=" ml-[9px] w-[88px] h-[22px]">
                <p className=" flex justify-center  mb-[8px] items-center text-zinc text-xs font-cairo font-normal not-italic leading-normal">
                  +14% Last Month
                </p>
              </div>
            </div>
          </div>
          {/**stats2 */}
          <div className="relative mt-2 mr-5 ml-5 roundedProgress">
            <Circle
              percent={74}
              strokeWidth={10}
              strokeColor="#FF5630"
              trailWidth={8}
              trailColor="#EDF1FB"
            />
            <p className="absolute top-6 left-5 flex justify-center items-center font-cairo text-xs font-semibold leading-normal text-black not-italic">
              +74%
            </p>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex flex-row mt-[13px] ml-[20px]">
          {/**stats1 */}
          <div className="flex flex-col ">
            <div className="w-[127px] h-[26px]">
              <p
                className=" font-cairo text-sm font-semibold
             text-natural not-italic leading-normal"
              >
                Spend
              </p>
            </div>
            <div className="w-[54px] h-[45px]">
              <p className="text-2xl text-darkPurple font-cairo font-semibold not-italic leading-normal">
                <CountUp start={0} end={1.3} delay={1} />M
              </p>
            </div>

            <div className="flex justify-start items-center   mb-[10px] pb-[8px] ">
              <div className="  flex justify-center items-center bg-teal-50 rounded-full mb-[13px] m-[3px] w-[18px] h-[18px]">
                <FaArrowTrendUp className=" flex justify-center items-center text-xs text-emerald w-3 h-3 m-[3px]" />
              </div>
              <div classNam="ml-[9px] w-[54px] h-[15px]">
                <p className=" flex justify-center items-center mb-[8px] ml-[2px] text-green text-xs font-cairo font-normal not-italic leading-normal">
                  +39.69%
                </p>
              </div>
            </div>
          </div>
          {/**stats2 */}
          <div className=" flex justify-center mx-auto items-center mb-[20px] mr-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="106"
              height="35"
              viewBox="0 0 106 35"
              fill="none"
            >
              <path
                d="M1.23462 33C1.23462 33 10.2093 16.331 20.5203 22.0705C30.8313 27.8101 32.1676 33 41.333 29.5563C50.4983 26.1125 51.072 -2.99244 59.0917 2.74711C67.1113 8.48666 86.9066 19.9657 104.092 2.74711"
                stroke="url(#paint0_linear_2082_6177)"
                stroke-width="2.37343"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2082_6177"
                  x1="64.7614"
                  y1="-6.20739"
                  x2="42.8468"
                  y2="49.3994"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.920507" stop-color="#9B51E0" />
                  <stop offset="1" stop-color="#52AD97" stop-opacity="0.01" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </BoxWrapper>
      
    </div>
  );
};

export default DashboardStats;
function BoxWrapper({ children }) {
  return (
    <div className="h-[115px]  ml-[33px] flex-1   bg-white rounded-lg  hover:scale-105 transition duration-200">
      {children}
    </div>
  );
}
