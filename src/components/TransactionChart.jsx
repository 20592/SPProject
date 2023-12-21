import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
	{
		name: 'Jan',
		Expense: 5400,
		Income: 2400
	},
	{
		name: 'Feb',
		Expense: 6300,
		Income: 1398
	},
	{
		name: 'Mar',
		Expense: 23000,
		Income: 9800
	},
	{
		name: 'Apr',
		Expense: 7000,
		Income: 3908
	},
	{
		name: 'May',
		Expense: 10300,
		Income: 4800
	},
	{
		name: 'Jun',
		Expense: 23000,
		Income: 3800
	},
	{
		name: 'July',
		Expense:23000 ,
		Income: 4300
	},
	{
		name: 'Aug',
		Expense: 61000,
		Income: 9800
	},
	{
		name: 'Sep',
		Expense: 19000,
		Income: 3908
	},
	{
		name: 'Oct',
		Expense: 19000,
		Income: 4800
	},
	{
		name: 'Nov',
		Expense: 19000,
		Income: 3800
	}

]

	


export default function TransactionChart() {
	return (
		<div className=" w-[740px] h-[441px] bg-white ml-[28px] pb-[20px] pr-[10px] rounded-lg hover:scale-105 transition duration-200">
			<div className='flex justify-between items-center mt-4'>
			<p className="text-darkPurple text-lg pl-[28px] pt-[5px] font-semibold  font-cairo not-italic leading-normal ">Spend by month</p>
			<div className="mt-3 mr-6">
          <button className=" w-[97px]  h-[31px] flex justify-center text-center  items-center border-2 rounded-lg  ">
            <div
              className="flex justify-center  text-center items-center w-[41px] h-[15px]  py-8 px-3
        font-cairo text-xs font-medium ml-2"
            >
              2022
              <select
                name="months"
                id="cars"
                className="w-[11px]  h-[7px] px-2"
              >
                <option value="2022"></option>
                <option value="2023">feb</option>
                <option value="2024">march</option>
                <option value="2025">apri</option>
              </select>
            </div>
          </button>
        </div>
			</div>
			
			<div className="m-3 text-xs font-medium font-cairo text-gray-600">
			
					<BarChart
						width={660}
						height={360}
						data={data}
						margin={{
							top: 30,
							right: 20,
							left: 40,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="" vertical={false} />
						<XAxis dataKey="name"  padding="30"/>
						<YAxis  />
						<Tooltip />
						<Legend />
						
						<Bar dataKey="Expense" fill="#6418C3" />
					</BarChart>
			
			</div>
		</div>
	)
}