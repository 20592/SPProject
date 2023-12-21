import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import OrderLine from '../components/OrderLine';

const RequestSix = () => {
  return (
    <div className="h-full  shadow-lg bg-slate-50">
        <div className='flex justify-between '>
        <div className="flex   mt-[25px] ml-[35px] space-x-1">
          <h2 className= "flex  justify-center items-center text-black text-2xl font-semibold font-cairo">Request</h2>
          < FaAngleRight className="mt-2 flex  justify-center items-center text-blue text-3xl font-bold font-cairo" />
          <h2 className=" flex  justify-center items-center text-blue text-2xl font-bold font-cairo">
          View Request
          </h2>

          
        </div>
        <div className='space-x-7 mt-[30px] mr-[35px] '>
            <button className='w-[98px] h-[42px] rounded-md bg-red-600 text-white
            font-inter text-sm leading-6 font-semibold'>Cancel</button>
            <button className='w-[98px] h-[42px] rounded-md border-2 border-blue  text-blue
            font-inter text-sm leading-6 font-semibold'>Revise</button>
            <button className='w-[138px] h-[42px] rounded-md bg-blue  text-white
            font-inter text-sm leading-6 font-semibold '>Repeat Order</button>
          </div>
        </div>
<div className='w-[1135px] h-[441px] bg-white rounded-lg ml-[30px] mr-[38px] mt-[25px]'>
<p className='font-cairo text-2xl text-black font-semibold pt-[26px] ml-[30px]' >Request No.6</p>
<div className='flex justify-between  mt-[25px]'>
    <p className=' ml-[55px] text-natural font-cairo font-semibold text-lg'>Status</p>
    <p className='text-natural font-cairo font-semibold text-lg'>Requestor Name</p>
    <p className='text-natural font-cairo font-semibold text-lg'>Requestor Email</p>
    <p className='mr-[150px] text-natural font-cairo font-semibold text-lg'>Creation Date</p>
</div>
<div  className='flex justify-between'>
    <button className=' mt-[7px] ml-[47px] w-[107px] h-[37px] flex justify-center items-center bg-amber-100 rounded-3xl font-bold text-sm font-cairo text-amber-400'>#pending</button>
    <p className='mt-[5px]  font-cairo text-xl text-black font-semibold'>James Hartper</p>
    <p className='mt-[5px]  font-cairo text-xl text-black font-semibold'>Jamesharper@example.com</p>
    <p className='mt-[5px] mr-[150px] font-cairo text-xl text-black font-semibold'>02/08/2022</p>
</div>
<div className='flex justify-between items-center mt-[58px]'>
    <p className=' ml-[55px] font-cairo text-xl text-natural font-semibold'>Department</p>
    <p className='  font-cairo text-xl text-natural font-semibold'>Location</p>
    <p className=' font-cairo text-xl text-natural font-semibold'>Delivery Date</p>
    <p className=' mr-[150px] font-cairo text-xl text-natural font-semibold'>Request Type</p>
</div>
<div  className='flex justify-between items-center mt-[15px]' >
    <p className='font-semibold text-xl font-cairo text-black ml-[55px]'>Tech</p>
    <p className=' ml-[20px] font-semibold text-xl font-cairo text-black'> Newyork,USA</p>
    <p className=' mr-[20px] font-semibold text-xl font-cairo text-black text-center'>10/08/20222</p>
    <p className=' mr-[150px] font-semibold text-xl font-cairo text-black'>Product</p>
</div>
<div className='flex  items-center space-x-52 mt-[38px] ' >
    <p className='ml-[55px] text-lg font-cairo font-semibold text-natural'>Total</p>
    <p className='text-lg font-cairo font-semibold text-natural'>Final Approver</p>
</div>
<div className='flex space-x-52 items-center mt-[15px]' >
    <p className=' ml-[55px] font-cairo text-xl text-black font-semibold'>$9,500</p>
    <p className='mr-[10px]  font-cairo text-xl text-black font-semibold'>John Smith</p>
</div>
</div>

<OrderLine/>
    </div>
  )
}

export default RequestSix