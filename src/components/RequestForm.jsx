import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const RequestForm = () => {
  return (
    <div className="w-[1135px] h-[348px] ml-[35px] mt-[26px] mr-[35px] rounded-lg bg-white">
      <form>
        <div className="flex">
          <label
            html
            for=" Desired Date"
            className="flex   items-center text-lg font-semibold font-cairo text-gray-500 pl-[27px] mt-[40px]"
          >
            Desired Date
          </label>
          <div className="flex relative items-center justify-between">
            <input
              type=""
              placeholder="dd/mm/yy"
              className=" ml-[55px] border-none  ring-gray-300 focus:ring-gray-100 focus:ring-2 outline-none ring-2 bg-gray-100 mt-[40px] text-lg font-medium font-cairo pl-[15px] rounded-lg w-[277px] h-[57px]"
            />
            <FaCalendarAlt
              className="absolute mt-[40px] mr-[11px]
          text-blue pointer-events-none right-2 text-xl"
            />
          </div>
          <label
            html
            for=" Department"
            className="flex items-center ml-[56px] text-lg font-semibold font-cairo text-gray-500 pl-[18px] mt-[40px]"
          >
            Department
          </label>
          <div className="flex relative  items-center justify-between   pl-[21px]">
              <input
                type="text"
                name="date"
                placeholder="Finance"
                className=" w-[277px] h-[57px] ml-[55px] bg-gray-100  mt-[36px]  text-lg font-cairo font-medium pl-[15px] border-none  ring-gray-300 focus:ring-gray-100
                 focus:ring-2 outline-none ring-2 text-black   rounded-lg"
              />
              <FaAngleDown   className="absolute  mt-[40px]  mr-[11px]
          text-natural font-extrabold pointer-events-none right-2 text-2xl"/>
            </div>
             
       
          </div>
          {/**second div */}
    <div className="flex">
        <label
         html
         for="Location"
         className="flex  mt-[20px] items-center text-lg font-semibold font-cairo text-gray-500 pl-[27px] ">
            Location

        </label>
        <div className="flex relative  items-center justify-between   ml-[26px]">
              <input
                type="text"
                name="date"
                placeholder="Select Location"
                className=" w-[277px] h-[57px] ml-[63px] bg-gray-100  border-none  ring-gray-300 focus:ring-gray-100 
                focus:ring-2 outline-none ring-2 mt-[24px]  text-lg font-cairo font-medium pl-[15px]  text-black rounded-lg"
              />
              <FaAngleDown   className="absolute  mt-[20px]  mr-[11px]
          text-natural font-extrabold pointer-events-none right-2 text-2xl"/>
            
            
            
            </div>
             
            <label
            html
            for="Request Type"
            className="flex items-center ml-[56px] text-lg font-semibold font-cairo text-gray-500 pl-[18px] mt-[24px]"
          >
            Request Type
          </label>
          <div className="flex relative  items-center justify-between   pl-[21px]  mt-[10px]">
              <input
                type="text"
                name="date"
                placeholder="Select Type"
                className=" w-[277px] h-[57px] ml-[46px] bg-gray-100  mt-[18px]  border-none  ring-gray-300 focus:ring-gray-100 focus:ring-2 outline-none ring-2 text-lg font-cairo font-medium pl-[15px] rounded-lg"
              />
              <FaAngleDown   className="absolute  mt-[20px]  mr-[11px]
          text-natural font-extrabold pointer-events-none right-2 text-2xl"/>
            </div>
          </div>
    <div className="flex">
        <label
         html
         for="Request Type"
         className="flex items-center ml-[28px] text-lg font-semibold font-cairo text-gray-500  ">
            Note
        </label>
        <textarea className=" bg-gray-100 w-[804px]  h-[108px]
        font-cairo font-medium text-lg pl-[16px] pt-[20px]  text-black border-none  ring-gray-300 focus:ring-gray-100 
        focus:ring-2 outline-none ring-2 rounded-lg mt-[23px] ml-[115px]">
           Need Appliance for office Setup
        </textarea>
    </div>
      </form>
    </div>
  );
};

export default RequestForm;
