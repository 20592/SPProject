import React from "react";

import { HiDotsHorizontal } from "react-icons/hi";
import { FaShuttleVan } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";
const Deliveries = () => {
  const staticDeliveryData = [
    {
      orderId: "Order ID : 4523451",
      timeStamps: "1: 45 AM,July 03",
      city: "New York, USA",
    },
  ];
  return (
    <div className="w-[460px] h-[452px] bg-white space-y-3 ml-[30px] mt-[30px] mr-[30px] mb-[18px] rounded-md hover:scale-105 transition duration-200">
      <div className="text-darkPurple text-lg font-semibold font-cairo not-italic leading-normal pt-[18px] pl-[30px] mb-[17px]">
        Deliveries in transit
      </div>
      {/**box1 */}
      <div className="w-[400px] h-[115px] rounded-lg shadow-sm   opacity-50 border-2 border-silver pb-4 ml-[30px] mr-[24px] ">
        {staticDeliveryData.map((item, index) => (
          <div key={index} className="">
            <div className="flex justify-between  ">
              <p className="text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal  ml-[20px] pt-[12px]">
                {item.orderId}
              </p>
              <div className="w-[13px] h-[3px] pt-[18px] mr-[14px]">
                <HiDotsHorizontal />
              </div>
            </div>

            <div>
              <div className="flex items-center mt-[4px]">
                <div className=" rounded-l-md bg-blue rounded-lg  w-[124px] h-[9px] ml-[20px] mt-[2px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>

                <div className="w-[56px] h-[9px]  bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>

                <div className="relative">
                  <div className="w-[25px] h-[25px] rounded-full bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
                  <div className="absolute top-2 left-1.5 text-center items-center  text-white text-md ">
                    <FaShuttleVan />
                  </div>
                </div>
                <div className="w-[126px] h-[9px] bg-silver ml-[2px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-silver mt-[0px] ml-[2px] mr-[12px] "></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className=" ml-[2px] text-xs font-cairo font-semibold text-silver not-italic leading-normal pl-[20px] mt-[4px]">
                {item.timeStamps}
              </p>
              <p className=" mr-[12px] text-xs font-cairo font-semibold text-silver not-italic leading-normal  mt-[4px]">
                {item.timeStamps}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal pb-[4px] pl-[23px]">
                {item.city}
              </p>
              <p className="  mr-[12px] text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal">
                {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>






      {/**box2 */}
      <div className="w-[400px] h-[115px] rounded-lg shadow-sm  opacity-50 border-2  border-silver  pb-4 ml-[30px] mr-[24px]">
        {staticDeliveryData.map((item, index) => (
          <div key={index} className="">
            <div className="flex justify-between">
              <p className="text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal ml-[20px] pt-[12px]">
                {item.orderId}
              </p>
              <div className="w-[13px] h-[3px] pt-[18px] mr-[14px]">
                <HiDotsHorizontal />
              </div>
            </div>
            <div>
              <div className="flex items-center mt-[4px]">
                <div className="rounded-l-md bg-blue  w-[124px] h-[9px] ml-[20px] mt-[2px]"></div>

                <div className="relative">
                  <div className="w-[25px] h-[25px] rounded-full bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
                  <div className="absolute top-2 left-1.5 text-center items-center  text-white text-md ">
                    <FaShuttleVan />
                  </div>
                </div>
                <div className="w-[197px] h-[9px] bg-silver ml-[2px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-silver mt-[0px] ml-[4px] mr-[12px] "></div>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-xs font-cairo font-semibold text-silver not-italic leading-normal pl-[20px] mt-[4px]">
                {item.timeStamps}
              </p>
              <p className=" mr-[12px] text-xs font-cairo font-semibold text-silver not-italic leading-normal  mt-[4px]">
                {item.timeStamps}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal pl-[23px]">
                {item.city}
              </p>
              <p className=" mr-[12px] text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal">
                {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>




      {/**box3 */}
      <div className="w-[400px] h-[115px] rounded-xl shadow-sm  opacity-50 border-2 pb-4  border-silver ml-[30px] mr-[30px]">
        {staticDeliveryData.map((item, index) => (
          <div key={index} className="">
            <div className="flex justify-between">
              <p className="text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal ml-[20px] pt-[12px]">
                {item.orderId}
              </p>
              <div className="w-[13px] h-[3px] pt-[18px] mr-[14px]">
                <HiDotsHorizontal />
              </div>
            </div>

            <div className="flex items-center mt-[4px]">
              <div className="w-[155px] h-[9px] rounded-l-md bg-blue ml-[20px] mt-[2px]"></div>
              <div className="w-[9px] h-[9px] rounded-full bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
              <div className="w-[56px] h-[9px]  bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
              <div className="w-[9px] h-[9px] rounded-full bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
              <div className="w-[81px] h-[9px] bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
              <div className="relative">
                  <div className="w-[25px] h-[25px] rounded-full bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
                  <div className="absolute top-2 bottom-1  left-2 text-center items-center  text-white text-sm ">
                    < FaBusSimple />
                  </div>
                </div>
                <div className="w-[9px] h-[9px] rounded-full bg-blue mt-[2px] ml-[2px] mr-[2px]"></div>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-cairo font-semibold text-silver not-italic leading-normal pl-[20px] mt-[4px]">
                {item.timeStamps}
              </p>
              <p className=" mr-[12px] text-xs font-cairo font-semibold text-silver not-italic leading-normal  mt-[4px]">
                {item.timeStamps}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal pl-[23px]">
                {item.city}
              </p>
              <p className=" mr-[12px] text-xs font-cairo font-semibold text-darkPurple not-italic leading-normal  pl-[20px]">
                {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deliveries;
