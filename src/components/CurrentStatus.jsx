 
 import React from "react";
 
 function CurrentStatus(status) {
	switch (status) {
		case 'Pending':
			return (
				<span className="capitalize flex justify-center items-center px-[16px] py-[2px] rounded-xl w-[74px] h-[27px] 
                text-xs font-bold font-cairo text-amber-600 bg-amber-200">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Approve':
			return (
				<span className="capitalize flex justify-center items-center px-[16px] py-[2px] rounded-xl w-[74px] h-[27px] 
                text-xs font-bold font-cairo text-teal-600 bg-teal-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Rejected':
			return (
				<span className="capitalize flex justify-center items-center px-[16px] py-[2px] rounded-xl w-[74px] h-[27px]  text-xs font-bold font-cairo text-red-600 bg-red-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Closed':
			return (
				<span className="capitalize flex justify-center items-center px-[16px] py-[2px] rounded-xl w-[74px] h-[27px] text-xs font-bold font-cairo text-violet-600 bg-violet-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Draft':
			return (
				<span className="capitalize flex justify-center items-center px-[16px] py-[2px] rounded-xl w-[74px] h-[27px] text-xs font-bold font-cairo  bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
            
		default:
			return (
				<span className="capitalize  flex justify-center items-center px-[16px] py-[2px] rounded-xl w-[74px] h-[27px] text-xs  text-yelllow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}
export default CurrentStatus