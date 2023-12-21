import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";

function LineComponent() {
  const [product] = useState([
    {
      name: "Active",
      data: [85, 130, 100, 130, 140, 150, 90, 100, 80, 90, 140, 80],
      color:"#6418C3",
    },
    {
      name: "Approved",
      data: [30, 45, 35, 40, 50, 80, 15, 25, 40, 60, 35, 20],
      color:"#39B29A",
    },
    {
      name: "Settled",
      data: [10, 10, 10, 36, 40, 15, 38, 25, 30, 35, 50, 20],
      color:"#D58EE9"
    },
  ]);

  const [option] = useState({
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      categories: ["0","40","80","120","160"],
    },
  });
  return (
    <div className="pb-6">
      <div div className="flex justify-between pt-1 pl-1 items-center">
        <p className="pb-2  ml-6 mt-2  text-darkPurple text-lg font-semibold font-cairo leading-normal non-italic">
          Purchase Order
        </p>
        <div className="mt-3 mr-6">
          <button className=" w-[80px]  h-[31px] flex justify-center text-center  items-center border-2 rounded-lg  ">
          <div
              className="flex justify-center  text-center items-center w-[41px] h-[15px]  py-8 px-4
        font-cairo text-xs font-medium ml-2"
            >
              Month
              <select
                name="months"
                id="cars"
                className="w-[11px]  h-[7px] px-2"
              >
                <option value="jan"></option>
                <option value="feb">feb</option>
                <option value="march">march</option>
                <option value="april">apri</option>
              </select>
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center  ml-6 space-x-16">
      <div class="flex  flex-col items-center space-x-2">
        <div class="w-12 h-11 font-cairo text-2xl not-italic 
        font-bold leading-normal  text-blue   flex items-center justify-center">
          3254
        </div>
        <div class=" flex text-center text-sm font-semibold  font-cairo  not-italic leading-normal text-gray-500 ">Active</div>
      </div>

      <div class="flex  flex-col items-center space-x-2">
        <div class=" w-12 h-11 font-cairo text-2xl not-italic 
        font-bold leading-normal text-emerald   flex items-center justify-center">
          251
        </div>
        <div class=" flex text-center text-sm font-semibold  font-cairo  not-italic leading-normal text-gray-500 ">Approved</div>
      </div>

      <div class="flex flex-col items-center space-x-2">
        <div class="  w-12 h-11 text-purple text-2xl flex items-center justify-center">
          320
        </div>
        <div class="flex text-center text-sm font-semibold  font-cairo  not-italic leading-normal text-gray-500 ">Settled</div>
      </div>
      </div>
      

      <div className="px-6 py-2">
        <Chart
          type="line"
          width={1100}
          height={300}
          series={product}
          options={option}
        ></Chart>
      </div>
    </div>
  );
}

export default LineComponent;
