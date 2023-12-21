import React from "react";
import { HiPlusSm } from "react-icons/hi";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Catalog from "./Catalog";
import Download from "./Download";
import { FiMoreVertical } from "react-icons/fi";


import CurrentStatus from "../components/CurrentStatus";
import Documents from "../components/Documents";

const OrderList = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const closeCatalog = () => setShowCatalog(false);
  const [showDownload, setShowDownload] = useState(false);
  const closeDownload = () => setShowDownload(false);
  console.log('showDownload:', showDownload);

  const orderListData = [
    {
      id: "1",
      lineNo: "01",
      name: "Headphones",
      category: "Tech",
      quantity: "05",
      unit: "Each",
      price: "$150",
      totalPrice: "$750",
      currentStatus: "Draft",
    },
    {
      id: "2",
      lineNo: "02",
      name: "Headphones",
      category: "Tech",
      quantity: "05",
      unit: "Each",
      price: "$150",
      totalPrice: "$750",
      currentStatus: "Draft",
    },
    {
      id: "3",
      lineNo: "03",
      name: "Raw Material",
      category: "Tech",
      quantity: "12",
      unit: "Each",
      price: "$150",
      totalPrice: "$750",
      currentStatus: "Draft",
    },
    {
      id: "4",
      lineNo: "04",
      name: "Peripherals",
      category: "Tech",
      quantity: "500",
      unit: "Each",
      price: "$150",
      totalPrice: "$750",
      currentStatus: "Draft",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="mt-[35px] pt-[10px] ml-[35px] text-slate-500 font-cairo font-semibold text-2xl">
          Order Line 04
        </p>

        <div className="mt-[35px]  mr-[26px] space-x-3 flex items-center  ">
          {/**button 1 */}
          {
            <button
              onClick={() => setShowCatalog(true)}
              className="  w-[163px] h-[50px] pl-[10px] bg-blue text-white pt-[20px] pb-[20px] pr-[10px]
        flex items-center rounded-lg justify-between 
"
            >
              <div className="w-[18px] h-[18px]  ml-[16px] rounded-full bg-white text-blue flex items-center justify-center">
                <HiPlusSm />
              </div>
              <p className="text-base  pr-[20px] font-medium font-cairo text-white">
                Add Items
              </p>
            </button>
          }
          <div className="flex items-center justify-center">
            {showCatalog && <Catalog  closeCatalog={closeCatalog} />}
          </div>

          {/**button 2 */}
          <button
            className="mr-[20px] w-[159px] h-[50px] border-2 border-blue 
          text-base rounded-lg font-semibold text-blue font-cairo"
          >
            Add Custom Item
          </button>
          {/**button 3 */}
          {
            <button
              onClick={() => setShowDownload(true)}
              className="mr-[10px] w-[163px] h-[50px] pl-[10px] border-2 border-blue bg-white text-blue pt-[20px] pb-[20px] pr-[10px]
        flex items-center rounded-lg justify-between
"
            >
              <div className="w-[18px] h-[18px]  ml-[10px] rounded-full bg-blue text-white flex items-center justify-center">
                <HiPlusSm />
              </div>
              <p className="text-ls  pr-[20px] font-medium font-cairo text-blue">
                Import Item
              </p>
            </button>
          }
          <div className="flex items-center justify-center">
            {showDownload && <Download className="" closeDownload={closeDownload} />}
          </div>
        </div>
      </div>

      <table className="mt-[35px] ml-[32px]   w-[1135px] h-[47px]">
        <thead className=" bg-white h-[50px] rounded-xl">
          <tr className="rounded-lg">
            <th className="pr-[35px] pl-[25px]  font-cairo text-base text-slate-500 font-semibold">
              Line
            </th>
            <th className=" pr-[35px] pl-[20px] font-cairo text-base text-slate-500 font-semibold">
              Name
            </th>
            <th className="pr-[25px] pl-[20px] font-cairo text-base text-slate-500 font-semibold">
              Category
            </th>
            <th className=" pr-[25px] pl-[20px] font-cairo text-base text-slate-500 font-semibold">
              Quantity
            </th>
            <th className="pr-[25px]  pl-[20px] font-cairo text-base text-slate-500 font-semibold">
              Unit
            </th>
            <th className="pr-[25px]  pl-[20px] font-cairo text-base text-slate-500 font-semibold">
              Price
            </th>
            <th className="pr-[25px]  pl-[25px]  font-cairo text-base text-slate-500 font-semibold">
              Total Cost
            </th>
            <th className="rounded-tr-lg pr-[40px]  rounded-br-lg  font-cairo text-base text-slate-500 font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <br />
        <tbody className="mt-[25px]  h-[55px] rounded-xl">
          {orderListData.map((item) => (
            <tr key={item.id}>
              <td className="pr-[20px] pl-[20px] w -[1135px] h-[70px] text-center rounded-medium bg-white  font-cairo text-base text-darkPurple font-semibold">
                {item.lineNo}
              </td>
              <td className="pr-[20px]   w-[1135px] h-[70px] text-center rounded-medium bg-white  font-cairo text-base text-slate-500 font-semibold">
                {item.name}
              </td>
              <td className="pr-[20px]  w-[1135px] h-[70px] text-center rounded-medium bg-white pl-[25px] font-cairo text-base text-slate-500 font-semibold">
                {item.category}
              </td>
              <td className="pr-[20px]   w-[1135px] h-[70px] text-center rounded-medium bg-white pl-[25px] font-cairo text-base text-slate-500 font-semibold">
                {item.quantity}
              </td>
              <td className="pr-[20px]  w-[1135px] h-[70px] text-center rounded-medium bg-white pl-[25px] font-cairo text-base text-slate-500 font-semibold">
                {item.unit}
              </td>
              <td className="pr-[20px]   w-[1135px]   h-[70px] text-center rounded-medium bg-white pl-[25px] font-cairo text-base text-slate-500 font-semibold">
                {item.price}
              </td>
              <td className="pr-[20px]    w-[1135px] h-[70px] text-center rounded-medium bg-white pl-[35px] font-cairo text-base text-slate-500 font-semibold">
                {item.totalPrice}
              </td>
              <td className="   w-[1135px]  text-center rounded-medium  bg-white  h-[70px] ">
                {" "}
              <button>  {CurrentStatus(item.currentStatus)}{" "}</button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex  justify-between  w-[1135px] h-[105px] bg-white  ml-[30px] ">
        <p className="pl-[40px] py-[35px] font-cairo text-base text-darkPurple font-semibold">
          05
        </p>
        <input
          type="required"
          placeholder="Smart Watch"
          className="w-[136px] h-[47px] rounded-lg mt-[27px] border-none  ring-gray-300 focus:ring-gray-100 focus:ring-2 outline-none ring-2   text-center 
                font-cairo text-sm text-darkPurple font-medium  bg-gray-100"
        />
        <button className="pr-[10px] pl-[10px] flex justify-between items-center w-[117px] ml-[0px] h-[47px] mt-[27px] rounded-lg  bg-gray-100">
          <p className="    font-cairo text-sm text-darkPurple font-medium ">
            Others
          </p>
          <FaAngleDown className="text-lg text-natural" />
        </button>

        <p
          className="w-[58px] h-[47px] mt-[27px] ml-[25px] font-cairo text-sm
                text-darkPurple font-medium  rounded-lg bg-gray-100 text-center flex items-center justify-center "
        >
          55
        </p>
        <p
          className="w-[64px] h-[47px] mt-[27px] ml-[35px]   
               font-cairo text-sm text-darkPurple font-medium rounded-lg bg-gray-100 text-center flex items-center justify-center "
        >
          Each
        </p>
        <p
          className="w-[58px] h-[47px] mt-[27px] ml-[30px]  
               font-cairo text-sm text-darkPurple font-medium  rounded-lg bg-gray-100 text-center flex items-center justify-center "
        >
          $350
        </p>
        <p
          className="font-cairo text-base text-darkPurple 
               
               font-medium  ml-[30px]   text-center flex items-center justify-center "
        >
          $3500
        </p>
        <div className="flex"> 
          <button
          className="w-[74px] h-[27px] px-[16px] py-[2px] mt-[38px] ml-[35px] mr-[40px]  rounded-xl bg-gray-100
         font-cairo text-xs text-gray-600 font-bold"
        >
          Draft
        </button>
        <FiMoreVertical className="mt-[45px]  mr-[20px] text-lg text-gray-400 " />
        </div>
       
      </div>
      <button
        className=" mt-[28px] ml-[31px] w-[244px] h-[50px] pl-[10px] bg-blue text-white pt-[20px] pb-[20px] pr-[10px]
           flex items-center rounded-lg justify-center space-x-4
          "
      >
        <div className="w-[18px] h-[18px]  text-lg ml-[16px] rounded-full bg-white text-blue flex items-center justify-center">
          <HiPlusSm />
        </div>
        <p className="text-lg  pr-[20px] font-semibold font-cairo text-white">
          Attach Documents
        </p>
      </button>
      <Documents />
     
     
    </div>
  );
};

export default OrderList;
