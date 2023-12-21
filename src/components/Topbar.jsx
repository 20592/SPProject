import logo from "../assets/MicrosoftTeams-image (8) 1.jpg";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";
import { BiBell } from "react-icons/bi";

import { IoMdArrowDropdown } from "react-icons/io";

const Topbar = () => {
  return (
    <div
      className="bg-white w-full mt-2 mx-auto h-20 flex justify-between
    items-center pl-12 pr-10  "
    >
      <img
        className="w-40 h-6 mt-30 text-2xl "
        src={logo}
        alt="logo"
        
      />

      <div className="flex justify-between items-center space-x-2">
        <form action="w-[358px] h-[448px]">
          <div className="relative flex items-center justify-between mx-14  ">
            <PiMagnifyingGlassBold
              className="w-[16px] h-[16px] absolute ml-4 
          text-blue pointer-events-none"
            />
            <input
              type="text"
              name="search"
              placeholder="Search by anything"
              autocomplete="off"
              aria-label="search anything"
              className="w-80 h-11 pr-3 leading-normal  pl-12 py-2 radius-xl 
          font-semibold not-italic text-sm bg-gray-100 
         text-grayText 
          font-cairo rounded-2xl border-none outline-none ring-2  ring-gray-300 focus:ring-gray-100 focus:ring-2"
         
            />
          </div>
        </form>

        <div className="flex  items-center space-x-6 mr-8 ">
        
            
        
            <BsQuestionCircle className="h-[24px] w-[24px] bg-natural text-white border-none rounded-full 
      
         flex justify-center items-center " />
          
          <div className=" flex  items-center text-natural relative">
            <BiBell className="h-[24px] w-[24px] " />
            <div
              className=" bg-red-700  flex justify-center items-center top-1 right-0 text-[6px] text-white absolute h-[12px] 
              w-[12px] rounded-full p-[1px] fo "
            >
              03
            </div>
          </div>

          <img src="https://i.pinimg.com/474x/60/b4/7e/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg" alt="profile" width={61} height={61} className=" rounded-full border-2 border-blue" />

          <IoMdArrowDropdown className="text-natural " />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
