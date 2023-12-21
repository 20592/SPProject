import React from 'react'
import RequestForm from "../components/RequestForm";

import OrderList from "../components/OrderList";

import { FaAngleRight } from "react-icons/fa";


const Table = () => {

  return (
    <div className="h-full  shadow-lg bg-slate-50">
        <div className="flex   pt-[25px] pl-[35px] space-x-2">
          <h2 className=  " flex  justify-center items-center text-black text-2xl font-semibold font-cairo">Request</h2>
          < FaAngleRight className=" pt-1 flex  justify-center items-center text-blue text-3xl font-bold font-cairo" />
          <h2 className=" flex  justify-center items-center text-blue text-2xl font-bold font-cairo">
          View Request
          </h2>
        </div>
        <RequestForm/>

        <OrderList/>
       
        </div>
  )
}

export default Table