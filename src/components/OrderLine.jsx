import React from 'react'
import { HiPlusSm } from "react-icons/hi";
import { FaFilePdf } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import CurrentStatus from "../components/CurrentStatus";
const OrderLine = () => {
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
          currentStatus: "Pending",
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
          currentStatus: "Pending",
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
          currentStatus: "Pending",
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
          currentStatus: "Pending",
        },
      ];
      const documentData = [
        {
          id: "1",
          pdfIcon: <FaFilePdf />,
          fileName: "MainDoc.pdf",
          uploadDate: "20/01/2023",
          fileSize: "1.1MB",
    
          downloadIcon: <FaDownload />,
          deleteIcon: <MdDelete />,
        },
        {
          id: "2",
          pdfIcon: <FaFilePdf />,
          fileName: " Budget.finance.Pdf",
          uploadDate: "20/01/2023",
          fileSize: "877KB",
    
          downloadIcon: <FaDownload />,
    
          deleteIcon: <MdDelete />,
        },
      ];

  return (
    <div>
<p className="mt-[35px] pt-[10px] ml-[35px] text-slate-500 font-cairo font-semibold text-2xl">
          Order Line 04
        </p>

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
                {CurrentStatus(item.currentStatus)}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <div className="mt-[28px]">
      <table className="  w-[1130px] ml-[30px]     ">
        <thead className=" w-[1130px]  h-[47px] rounded-xl bg-white">
          <tr className=" ">
            <th className="pr-[35px] pl-[25px] mr-[35px] text-left font-cairo text-base font-semibold text-natural ">
              File Name
            </th>
            <th className="pl-[20px] text-left pr-[45px] font-cairo text-base font-semibold text-natural">
              Update Date
            </th>
            <th className="pr-[35px] pl-[25px] text-left font-cairo text-base font-semibold text-natural ">
              File Size
            </th>
            <th className=" pr-[35px] pl-[25px] text-left font-cairo text-base font-semibold text-natural ">
              Upload By
            </th>
            <th className="pr-[35px] pl-[25px] text-left font-cairo text-base font-semibold text-natural ">
              Action
            </th>
          </tr>
        </thead>
        <br />
        <tbody className="w-[1110px] ml-[20px] h-[65px] bg-white">
          {documentData.map((item) => (
            <tr key={item.id} className=" border border-gray-100">
              <td className=" flex items-center ">
                <span className="w-[45px] h-[45px] bg-gray-50 flex items-center justify-center rounded-lg mb-[12px] ml-[24px] mt-[10px] text-red-600 text-lg">
                  {item.pdfIcon}
                </span>
                <span className="pl-[12px] font-cairo text-darkPurple text-base font-semibold">
                  {item.fileName}
                </span>{" "}
              </td>
              <td className="ml-[22px] mr-[20px] font-cairo text-darkPurple text-base font-semibold">
                {item.uploadDate}
              </td>
              <td className="ml-[12px] font-cairo text-darkPurple text-base font-semibold">
                {item.fileSize}
              </td>
              <td className="mt-[22px] text-center flex justify-around pt-[10px] mr-[12px] w-[158px] h-[35px] bg-gray-200 font-medium text-xs font-cairo my-5 rounded-lg text-black">
                <span className="w-[21px] h-[21px]">
                  <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1367" alt=""
                   className="rounded-full w-[21px] h-[21px]" width={21} height={21}/>
                </span>
                <span className="">John kosawki</span>
              </td>

              <td className="relative mb-[20px] text-center ">
                <span className='absolute text-2xl  left-1 text-gray-400'>{item.downloadIcon}</span>
                <span  className="absolute right-1  flex text-3xl text-gray-400">{item.deleteIcon}</span>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className='flex flex-col'>
      <label
       html
       for="Request Type"
     
         className="flex items-center ml-[28px]  pt-[25px] text-2xl font-semibold font-cairo text-slate-500  ">
            Notes
        </label>
        <textarea className=" bg-gray-100 w-[535px]  h-[183px]
        font-cairo font-medium text-lg pl-[16px] pt-[20px]  text-black border-none  ring-gray-300 focus:ring-gray-100 
        focus:ring-2 outline-none ring-2 rounded-lg mt-[23px] ml-[30px]">Need Appliances For Office SetUp</textarea>
      </div>
      

      
    </div>
    </div>
  )
}

export default OrderLine
