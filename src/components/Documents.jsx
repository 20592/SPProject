import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Link,Outlet,Route,Routes } from "react-router-dom"
import RequestSix from "../Pages/RequestSix";

import { FaDownload } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Documents = () => {
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
    <div className="mt-[28px]">
      <table className=" table-auto w-[1130px] ml-[30px]     ">
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

              <td className="relative text-center space-x-2 mb-[20px] mr-[40px]">
                <span className="absolute  text-2xl  text-gray-400"> {item.downloadIcon}</span>
                <span  className=" absolute right-1   text-3xl text-gray-400">{item.deleteIcon}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-[40px]">
        <div>
        <Link to="/requestsix">
<button className="flex justify-center items-center 
      w-[142px] rounded-lg bg-blue text-white py-[13px] px-[25px]">Submit</button> 
          </Link>
        </div>
         
        
      
      </div>
      <Outlet/>
      <div className="flex justify-center items-center mt-[26px]">
      <button className="flex justify-center items-center 
      w-[142px] rounded-lg bg-red-600 text-white py-[13px] px-[25px]">Cancel</button>
      </div>

      <Routes>
    
        <Route path="/requestsix" element={<RequestSix />} />
      </Routes>
    </div>
  );
};

export default Documents;
