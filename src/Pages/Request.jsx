import React from "react";
import { Link,Outlet,Route,Routes } from "react-router-dom"
import RequestStats from "../components/RequestStats";
import RequestModal from "../components/RequestModal";
import RequestTable from "../components/RequestTable";
import Table from "./Table"





const Request = () => {
  
  return (
    <div className="h-full  shadow-lg bg-slate-50">
      <div className="flex justify-between">
        <p className=" ml-[30px] mt-[28px] text-2xl font-bold font-cairo  text-blue ">
          Request
        </p>
        <div className=" ">
          
            <Link to="/table">
              <button
            
                className="  inline-flex justify-center items-center  w-[223px]  h-[50px] text-center shadow-sm text-base 
 font-medium font-cairo text-white leading-8 rounded-md bg-blue 
 py-[13px] px-[25px] mr-[28px] mt-[30px]"
              >
                + Create New Request
              </button>
            </Link>
          
        </div>
        <Outlet/>
      </div>
      <div className="flex mt-[30px]">
        <RequestStats />
      </div>
      <RequestModal />
      <RequestTable />
      <Routes>
        <Route path="/table" element={<Table />} />
  

      </Routes>

    </div>
  );
};

export default Request;
