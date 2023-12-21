import React from "react";
import { NavLink } from "react-router-dom";
import {
  SidebarData,
  SidebarDataApproval,
  SidebarDataSetting,
  SidebarDataSupplier,
} from "../data/SidebarData";

const Sidebar = () => {
  const activeLink= "flex my-3.5 justify-start items-center pl-[24px] pr-[29px] pt-[20px] pb-[20px] gap-x-3 w-[236px] h-10   rounded-lg transition-transform duration-200  bg-violet-100  text-blue" 
  const normalLink ="flex my-3.5 justify-start items-center pl-[24px] pr-[29px] pt-[20px] pb-[20px] gap-x-3 w-[236px] h-10 text-natural rounded-lg transition-transform duration-200" 
    
  return (
    <div className=" w-[270px] h-[2130px]  bg-white  pt-[21px] pb-[951px] pl-0 pr-0">
      <div className="flex flex-col  pt-[15px] pb-[75px] pl-[19px] pr-[19px]">
        {/*Menu */}
        <div
          className="text-black w-[40px] h-[26px] font-cairo text-sm not-italic 
        font-bold leading-normal tracking-normal uppercase ml-6"
        >
          Menu
        </div>
        <div>
          {SidebarData.map((item, index) => {
            return (
              <div   key={index}>
                <NavLink to={item.path}
                className={({isActive}) =>
              isActive ? activeLink : normalLink
              }
                >
                  <span className="w-5 h-5 font-bol">{item.icon}</span>
                  <span className=" font-cairo text-sm not-italic font-bold hover:font-extrabold  leading-normal tracking-normal">
                    {item.title}
                  </span>
                </NavLink>
              </div>
            );
          })}
        </div>

        {/* Approval Center */}
        <div className=" mt-6 flex text-black w-[124px] h-[26px] font-cairo text-sm not-italic font-bold leading-normal tracking-normal uppercase ml-6">
          Approval Center
        </div>
        <div>
          {SidebarDataApproval.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={item.path}
                  className="flex my-3.5 justify-start items-center pl-[24px] pr-[29px] 
                  pt-[20px] pb-[20px] gap-x-3 w-[236px] h-10
                   text-natural hover:text-blue hover:bg-violet-100 rounded-lg transition-transform duration-200"
                >
                  <span className="w-5 h-5 font-bold">{item.icon}</span>
                  <span className=" font-cairo text-sm not-italic font-bold hover:font-extrabold  leading-normal  tracking-normal">
                    {item.title}
                  </span>
                </NavLink>
              </div>
            );
          })}
        </div>
        {/**supplier management */}
        <div className=" mt-6 flex text-black w-[162px] h-[26px] font-cairo font-medium not-italic text-sm leading-normal tracking-normal uppercase ml-6">
          Supplier Management
        </div>
        {SidebarDataSupplier.map((item, index) => {
          return (
            <div key={index}>
              <NavLink to={item.path}
              className="flex my-3.5 justify-start items-center pl-[24px] pr-[29px] 
                  pt-[20px] pb-[20px] gap-x-3 w-[236px] h-10
                   text-natural hover:text-blue hover:bg-violet-100 rounded-lg transition-transform duration-200">
                <span  className="w-5 h-5 font-bold">{item.icon}</span>
                <span  className=" h-6 font-cairo text-sm not-italic font-semibold hover:font-extrabold  leading-normal  tracking-normal">{item.title}</span>
              </NavLink>
            </div>
          );
        })}

        {/*settings */}
        <div className=" mt-2 flex text-black w-[62px] h-[26px] font-cairo font-medium not-italic text-sm leading-normal tracking-normal uppercase ml-6">Support</div>
        <div>
          {SidebarDataSetting.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={item.path}
                
                className="flex my-2.5 justify-start items-center pl-[24px] pr-[29px] 
                  pt-[20px] pb-[20px] gap-x-3 w-[236px] h-10
                   text-natural hover:text-blue hover:bg-violet-100 rounded-lg transition-transform duration-200">
                  <span className="w-5 h-5 font-bold">{item.icon}</span>
                  <span className="font-cairo text-sm not-italic font-semibold hover:font-extrabold  leading-normal  tracking-normal">{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
