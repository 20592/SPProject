import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import CurrentStatus from "../components/CurrentStatus";

const StatusTable = () => {
  const RequestData = [
    {
      id: "1",
      requestSlNo: "01",
      requestor: "Talan Vaccaro",
      location: "USA Office",
      supplier: "Ebay",
      totalCost: "$8,255",
      creationDate: "11/01/2019",
      currentStatus: "Pending",
    },
    {
      id: "2",
      requestSlNo: "02",
      requestor: "Erin Dokidis",
      location: "USA Office",
      supplier: "Amazon",
      totalCost: "$9,000",
      creationDate: "25/08/2020",
      currentStatus: "Approve",
    },
    {
      id: "3",
      requestSlNo: "03",
      requestor: "Corey George",
      location: "USA Office",
      supplier: "Konfa PVT",
      totalCost: "$7855",
      creationDate: "12/50/2011",
      currentStatus: "Rejected",
    },
    {
      id: "4",
      requestSlNo: "04",
      requestor: "Marley Aminoff",
      location: "USA Office",
      supplier: "AWS",
      totalCost: "$9550",
      creationDate: "13/05/2015",
      currentStatus: "Closed",
    },
    {
      id: "5",
      requestSlNo: "05",
      requestor: "Livia Bator",
      location: "USA Office",
      supplier: "Azure",
      totalCost: "$2,500",
      creationDate: "22/11/2014",
      currentStatus: "Draft",
    },
    {
      id: "6",
      requestSlNo: "06",
      requestor: "Cristofer Saris",
      location: "USA Office",
      supplier: "Miniso",
      totalCost: "$1,500",
      creationDate: "15/07/2009",
      currentStatus: "Pending",
    },
    {
      id: "7",
      requestSlNo: "07",
      requestor: "Adison Vetrovs",
      location: "USA Office",
      supplier: "Ebay",
      totalCost: "$750",
      creationDate: "22/09/2021",
      currentStatus: "Pending",
    },
    {
      id: "8",
      requestSlNo: "08",
      requestor: "James Bator",
      location: "USA Office",
      supplier: "Azure",
      totalCost: "$2,500",
      creationDate: "10/10/2020",
      currentStatus: "Approve",
    },
    {
      id: "9",
      requestSlNo: "09",
      requestor: "Jaxson Dokidis",
      location: "USA Office",
      supplier: "Miniso",
      totalCost: "$1,500",
      creationDate: "7/11/2023",
      currentStatus: "Pending",
    },
    {
      id: "10",
      requestSlNo: "10",
      requestor: "Cooper Schleifer",
      location: "USA Office",
      supplier: "Ebay",
      totalCost: "$750",
      creationDate: "21/06/2014",
      currentStatus: "Draft",
    },
  ];
  return (
    <div className="  pt-[30px] ">
      <table className="w-[1130px] ml-[30px]  ">
        <thead className=" bg-white h-[59px] rounded-xl">
          <tr className="">
            <th className="  rounded-lg font-cairo text-base text-natural font-semibold">
            
              S.no
            </th>
            <th className="rounded-lg font-cairo text-base text-natural font-semibold">
              {" "}
              Requestor
            </th>
            <th className="rounded-lg  font-cairo text-base text-natural font-semibold">
              Location{" "}
            </th>
            <th className="rounded-lg  font-cairo text-base text-natural font-semibold">
              {" "}
              Supplier
            </th>
            <th className="rounded-lg  font-cairo text-base text-natural font-semibold">
              Total Cost{" "}
            </th>
            <th className="rounded-lg  font-cairo text-base text-natural font-semibold">
              {" "}
              Creation Data
            </th>
            <th className="rounded-lg pr-[40px]  font-cairo text-base text-natural font-semibold ">
              {" "}
              Status
            </th>
          </tr>
        </thead>
        <br />

        <tbody className="bg-white h-[59px]  ">
          {RequestData.map((item) => (
            <tr key={item.id} className="ml-[40px]">
              <td className=" w-[1135px]  text-center rounded-medium  font-cairo text-base font-medium text-black   bg-white  h-[70px]">
                {item.requestSlNo}
              </td>
              <td className="w-[1135px]   text-center rounded-medium font-cairo text-base font-medium text-black bg-white  h-[70px]">
                {item.requestor}
              </td>
              <td className=" w-[1135px]  text-center rounded-medium  font-cairo text-base font-medium text-black bg-white  h-[70px]">
                {item.location}
              </td>
              <td className="w-[1135px]  text-center rounded-medium   font-cairo text-base font-medium text-black bg-white  h-[70px]">
                {item.supplier}
              </td>
              <td className=" w-[1135px]  text-center rounded-medium  font-cairo text-base font-medium text-black bg-white  h-[70px]">
                {item.totalCost}
              </td>
              <td className=" w-[1135px]  text-center rounded-medium   font-cairo text-base font-medium text-black bg-white  h-[70px]">
                {item.creationDate}
              </td>

              <td className=" w-[1135px] pl-[40px] text-center rounded-medium  bg-white  h-[70px] ">
                {CurrentStatus(item.currentStatus)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mr-[35px] mt-[28px] space-x-2">
        <button className="w-[46px] h-[46px]  flex justify-center items-center rounded-lg border border-grey text-blue text-base font-semibold">
          <FaChevronLeft />
        </button>
        <ul className="flex border border-gray rounded-lg space-x-2">
          <li className="w-[46px] h-[46px]  flex justify-center items-center rounded-lg border border-grey text-white bg-blue text-lg font-semibold">1</li>
          <li className="w-[46px] h-[46px] flex justify-center items-center text-lg text-black font-medium font-poppin">2</li>
          <li className="w-[46px] h-[46px] flex justify-center items-center text-lg text-black font-medium font-poppin">3</li>
          <li className="w-[46px]  h-[46px] pr-[18px] flex justify-center items-center text-lg text-black font-medium font-poppin">4</li>
        </ul>
        <button  className="w-[46px] h-[46px]  flex justify-center items-center rounded-lg border border-grey text-blue text-base font-semibold">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StatusTable;
