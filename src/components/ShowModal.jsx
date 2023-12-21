import React from "react";
import { RiFilterOffFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const MyModal = ({ closeModal }) => {
  return (
    <div className="  w-[1138px] h-[254px] rounded-md border-2 ml-[36px]  mt-[24px] border-blue ">
      <button onClick={closeModal} className=" ml-[12px] mt-[5px] transition-all duration-100 ease-in-out ">
        <div className="flex justify-center items-center space-x-4">
          <RiFilterOffFill className="text-2xl text-blue ml-[11px] font-extrabold" />
          <p className="text-lg   font-semibold font-cairo text-blue leading-normal not-italic ml-[10px] mr-[20px] mb-[6px] mt-[6px]">
            Hide Filters
          </p>
        </div>
      </button>
      <form className=" space-x-4 transition-all duration-75 ease-in-out delay-100">
        <div className="flex  justify-between gap-[24px]">
          <div className="">
            <label
              htmlFor="date"
              className="pl-[21px] text-natural text-lg font semibold font-cairo leading-normal not-italic"
            >
              Date
            </label>
            <br />
            <div className="flex relative items-center justify-between   pl-[21px]  mt-[10px]">
              <input
                type="text"
                name="date"
                placeholder="22/08/23"
                className="w-[237px] h-[57px] text-lg font-cairo font-medium pl-[11px] pt-[11px] pb-[11px] text-natural border-2 border-white bg-white rounded-lg"
              />
              <FaCalendarAlt
                className="absolute mr-[11px]
          text-blue pointer-events-none right-2 text-xl"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="department"
              className="pl-[21px] text-natural text-lg font semibold font-cairo lesding-normal not"
            >
              Department
            </label>
            <br />
            <div className="flex relative  items-center justify-between   pl-[21px]  mt-[10px]">
              <input
                type="text"
                name="date"
                placeholder="Finance"
                className="w-[237px] h-[57px] text-lg font-cairo font-medium pl-[11px] pt-[11px] pb-[11px] text-natural border-2 border-white bg-white rounded-lg"
              />
              <RiArrowDropDownLine   className="absolute mr-[11px]
          text-natural font-extrabold pointer-events-none right-2 text-4xl"/>
            </div>
          </div>

          <div>
            <label htmlFor="location" className="pl-[21px] text-natural text-lg font semibold font-cairo lesding-normal not">Location</label>
            <br />
            <div className="flex relative  items-center justify-between   pl-[21px]  mt-[10px]">
              <input
                type="text"
                name="date"
                placeholder="Main Office"
                className="w-[237px] h-[57px] text-lg font-cairo font-medium pl-[11px] pt-[11px] pb-[11px] text-natural border-2 border-white bg-white rounded-lg"
              />
              <RiArrowDropDownLine   className="absolute mr-[11px]
          text-natural font-extrabold pointer-events-none right-2 text-4xl"/>
            </div>
          </div>

          <div>
            <label htmlFor="request"  className="pl-[21px] text-natural text-lg font semibold font-cairo lesding-normal not">Request Type</label>
            <br />
            <div className="flex relative  items-center justify-between mr-[20px]  pl-[21px]  mt-[10px]">
              <input
                type="text"
                name="date"
                placeholder="Product"
                className="w-[237px] h-[57px] text-lg font-cairo font-medium pl-[11px] pt-[11px] pb-[11px] text-natural border-2 border-white bg-white rounded-lg"
              />
              <RiArrowDropDownLine   className="absolute mr-[11px]
          text-natural font-extrabold pointer-events-none right-2 text-4xl"/>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[36px]">
          <button className="w-[127px] h-46px] py-[13px]  rounded-lg px-[25px] text-white bg-blue text-sm font-cairofont-semibold leading-normal not-italic">Search</button>
        </div>
      </form>
    </div>
  );
};

export default MyModal;
